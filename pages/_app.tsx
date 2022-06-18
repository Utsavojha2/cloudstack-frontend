import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { isArray } from 'lodash';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import i18n from 'i18next';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { AppContext, AppDispatchContext } from 'config/token.context';
import setupInterceptors from 'config/interceptor';
import AuthChecker from 'components/AuthChecker/AuthChecker';
import TopProgressBar from 'containers/Loading/ProgressBar';
import Snackbar from 'components/Common/Snackbar/Snackbar';
import { TokenPayload } from 'types/auth';
import { IError, IAppProps } from 'types/app';
import 'styles/globals.css';
import theme from 'theme/theme';
import 'translations/i18n';
import { getToastErrorMessages } from 'utils';
import PublicRouteWrapper from 'components/PublicRouteWrapper/PublicRouteWrapper';
import ConfirmAccountWrapper from 'components/ConfirmAccountWrapper/ConfirmAccountWrapper';
import ToastContextProvider from 'components/ToastProvider/ToastProvider';

const { publicRuntimeConfig } = getConfig();
axios.defaults.baseURL = publicRuntimeConfig.apiEndPoint;
axios.defaults.withCredentials = true;
setupInterceptors(axios);

const NoopLayout: React.FC = ({ children }) => children as React.ReactElement;

export default function MyApp({ Component, pageProps }: IAppProps) {
  const { locale } = useRouter();
  const [error, setError] = useState<IError>(null);
  const [accessToken, setAccessToken] = useState('');
  const [isTokenRefreshing, setIsRefreshTokenRefreshing] = useState(false);

  const isPublicRoute = Component.isGuestPage || false;
  const Layout = Component.Layout || NoopLayout;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const setToken = (token: string) => {
    setAccessToken(token);
  };

  const resetErrorMessage = () => setError(null);

  const renewAccessToken = async () => {
    const tokenData = await axios.get<TokenPayload>('/v1/api/refresh-token');
    setToken(tokenData.data.accessToken);
    setupInterceptors(axios, tokenData.data?.accessToken);
  };

  const queryClient = useMemo(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError: async (error, query) => {
          if (axios.isAxiosError(error)) {
            if (error?.response?.data.statusCode === 401) {
              try {
                setIsRefreshTokenRefreshing(true);
                await renewAccessToken();
                queryClient.refetchQueries(query.queryKey);
              } catch (err) {
                console.error(err);
              } finally {
                setIsRefreshTokenRefreshing(false);
              }
              return;
            }
            setError(error.response?.data);
          }
        },
      }),
      mutationCache: new MutationCache({
        onError: async (error, variable, _context, mutation) => {
          if (axios.isAxiosError(error)) {
            const errResponse = error.response?.data;
            if (errResponse.statusCode === 401) {
              try {
                setIsRefreshTokenRefreshing(true);
                await renewAccessToken();
                mutation.options.mutationFn?.(variable);
              } catch (err) {
                console.error(err);
              } finally {
                setIsRefreshTokenRefreshing(false);
              }
              return;
            }
            setError(error.response?.data);
          }
        },
      }),
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }, []);

  const renderErrorMessage = (responseError: IError) => {
    if (!responseError) return;
    if (isArray(responseError.message)) {
      const errorMessages = getToastErrorMessages(responseError.message);
      return errorMessages.map((msg, idx) => {
        return (
          <Snackbar
            key={`${msg.errormessage}-${idx.toString()}`}
            open
            toastMessage={msg.errormessage}
            onClose={resetErrorMessage}
            severity="error"
            style={{
              top: `${msg.top}px`,
            }}
          />
        );
      });
    }
    return (
      <Snackbar
        open
        onClose={resetErrorMessage}
        toastMessage={responseError?.message}
        severity="error"
      />
    );
  };

  const renderAppContent = () => {
    return (
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    );
  };

  return (
    <AppContext.Provider value={{ accessToken }}>
      <AppDispatchContext.Provider value={{ setToken }}>
        <ToastContextProvider>
          <QueryClientProvider client={queryClient}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                  {isPublicRoute ? (
                    <ConfirmAccountWrapper
                      isConfirmationPage={Component.isConfirmAccountPage}
                    >
                      <PublicRouteWrapper isTokenRefreshing={isTokenRefreshing}>
                        <TopProgressBar />
                        {renderAppContent()}
                      </PublicRouteWrapper>
                    </ConfirmAccountWrapper>
                  ) : (
                    <AuthChecker isTokenRefreshing={isTokenRefreshing}>
                      <TopProgressBar />
                      {renderAppContent()}
                    </AuthChecker>
                  )}
                  {renderErrorMessage(error)}
                </StyledThemeProvider>
              </ThemeProvider>
            </StyledEngineProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ToastContextProvider>
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

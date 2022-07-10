import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { isArray } from 'lodash';
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
import { axiosInstance } from 'config/axios.config';
import AuthChecker from 'components/AuthChecker/AuthChecker';
import TopProgressBar from 'containers/Loading/ProgressBar';
import Snackbar from 'components/Common/Snackbar/Snackbar';
import { ITokenPayload, ITokenType } from 'types/auth';
import { IError, IAppProps } from 'types/app';
import 'styles/globals.css';
import theme from 'theme/theme';
import 'translations/i18n';
import { getToastErrorMessages } from 'utils';
import PublicRouteWrapper from 'components/PublicRouteWrapper/PublicRouteWrapper';
import ConfirmAccountWrapper from 'components/ConfirmAccountWrapper/ConfirmAccountWrapper';
import ToastContextProvider from 'containers/Provider/ToastProvider/ToastProvider';

const NoopLayout: React.FC = ({ children }) => children as React.ReactElement;

export default function MyApp({ Component, pageProps }: IAppProps) {
  const { locale } = useRouter();
  const [error, setError] = useState<IError>(null);
  const [accessToken, setAccessToken] = useState<ITokenType>(null);
  const [isTokenRefreshing, setIsRefreshTokenRefreshing] = useState(false);

  const isConfirmAccountPage = Component.isConfirmAccountPage || false;
  const isPublicRoute = Component.isGuestPage || false;
  const Layout = Component.Layout || NoopLayout;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      config.headers!['Content-Type'] = 'application/json';
      if (accessToken) {
        config.headers!['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    });
  }, [accessToken]);

  const setToken = (token: ITokenType) => {
    setAccessToken(token);
  };

  const resetErrorMessage = () => setError(null);

  const renewAccessToken = async () => {
    const tokenData = await axiosInstance.get<ITokenPayload>(
      '/v1/api/refresh-token'
    );
    setToken(tokenData.data.accessToken);
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

  const renderAppComponent = () => {
    if (isPublicRoute) {
      return (
        <ConfirmAccountWrapper isConfirmationPage={isConfirmAccountPage}>
          <PublicRouteWrapper isTokenRefreshing={isTokenRefreshing}>
            <TopProgressBar />
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </PublicRouteWrapper>
        </ConfirmAccountWrapper>
      );
    }
    return (
      <AuthChecker isTokenRefreshing={isTokenRefreshing}>
        <TopProgressBar />
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </AuthChecker>
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
                  {renderAppComponent()}
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

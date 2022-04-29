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
import setupInterceptors from 'config/interceptor';
import AuthChecker from 'components/AuthChecker/AuthChecker';
import TopProgressBar from 'containers/Loading/ProgressBar';
import Snackbar from 'components/Common/Snackbar/Snackbar';
import { TokenContext } from 'config/token.context';
import { TokenPayload } from 'types/auth';
import { IError, IAppProps, IGlobalError } from 'types/app';
import 'styles/globals.css';
import theme from 'theme/theme';
import 'translations/i18n';

const { publicRuntimeConfig } = getConfig();
axios.defaults.baseURL = publicRuntimeConfig.apiEndPoint;
axios.defaults.withCredentials = true;
setupInterceptors(axios);

const NoopLayout: React.FC = ({ children }) => children as React.ReactElement;

export default function MyApp({ Component, pageProps }: IAppProps) {
  const { locale } = useRouter();
  const [error, setError] = useState<IGlobalError>(null);
  const [accessToken, setAccessToken] = useState('');
  // const _isPublicRoute = Component.isGuestPage || false;
  const Layout = Component.Layout || NoopLayout;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const setToken = (token: string) => {
    setAccessToken(token);
  };

  const renewAccessToken = async () => {
    const tokenData = await axios.get<TokenPayload>('/v1/api/refresh-token');
    setToken(tokenData.data.accessToken);
    setupInterceptors(axios, tokenData.data?.accessToken);
  };

  // For global error handling
  const queryClient = useMemo(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError: async (error, query) => {
          if (axios.isAxiosError(error)) {
            if (error?.response?.data.statusCode === 401) {
              try {
                await renewAccessToken();
                queryClient.refetchQueries(query.queryKey);
              } catch (err) {
                console.error(err);
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
                await renewAccessToken();
                mutation.options.mutationFn?.(variable);
              } catch (err) {
                console.error(err);
              }
              return;
            }
            setError(error.response?.data);
          }
        },
      }),
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    });
  }, []);

  const renderErrorMessage = (responseError: IError) => {
    if (!responseError) return;
    if (isArray(responseError.message)) {
      return responseError.message.map((errormessage: string, idx) => (
        <Snackbar
          key={`${errormessage}-${idx.toString()}`}
          open
          toastMessage={errormessage}
          onClose={() => setError(null)}
          severity="error"
        />
      ));
    }
    return (
      <Snackbar
        open
        onClose={() => setError(null)}
        toastMessage={responseError?.message}
        severity="error"
      />
    );
  };

  return (
    <TokenContext.Provider value={{ accessToken, setToken }}>
      <QueryClientProvider client={queryClient}>
        <AuthChecker>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <StyledThemeProvider theme={theme}>
                <Layout>
                  <CssBaseline />
                  <TopProgressBar />
                  <Component {...pageProps} />
                </Layout>
                {renderErrorMessage(error as IError)}
              </StyledThemeProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </AuthChecker>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TokenContext.Provider>
  );
}

import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import axios from 'axios';
import { isArray } from 'lodash';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import i18n from 'i18next';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import 'styles/globals.css';
import theme from 'theme/theme';
import 'translations/i18n';
import setupInterceptors from 'config/interceptor';
import AuthChecker from 'components/AuthChecker/AuthChecker';
import TopProgressBar from 'containers/Loading/ProgressBar';
import { TokenContext } from 'config/token.context';
import { TokenPayload } from 'types/auth';

const Snackbar = dynamic(() => import('components/Common/Snackbar/Snackbar'), {
  ssr: false,
});

type IError = {
  statusCode: number;
  message: string | Array<string>;
};

const { publicRuntimeConfig } = getConfig();
axios.defaults.baseURL = publicRuntimeConfig.apiEndPoint;
axios.defaults.withCredentials = true;
setupInterceptors(axios);

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  // TODO: better type check for errors
  const [error, setError] = useState<unknown>(null);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const setToken = (token: string) => {
    setAccessToken(token);
  };

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: async (error, query) => {
        if (axios.isAxiosError(error)) {
          if (error?.response?.data.statusCode === 401) {
            try {
              const tokenData = await axios.get<TokenPayload>(
                '/v1/api/refresh-token'
              );
              setToken(tokenData.data.accessToken);
              setupInterceptors(axios, tokenData.data?.accessToken);
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
          if (error?.response?.data.statusCode === 401) {
            try {
              const tokenData = await axios.get<TokenPayload>(
                '/v1/api/refresh-token'
              );
              setToken(tokenData.data?.accessToken);
              setupInterceptors(axios, tokenData.data?.accessToken);
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
        refetchOnWindowFocus: false,
        enabled: !!accessToken,
      },
    },
  });

  const renderErrorMessage = (responseError: IError) => {
    if (!responseError) return;
    if (isArray(responseError.message)) {
      return responseError.message.forEach((errormessage: string) => (
        <Snackbar
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
                <CssBaseline />
                <TopProgressBar />
                <Component {...pageProps} />
                {renderErrorMessage(error as IError)}
                <ReactQueryDevtools initialIsOpen={false} />
              </StyledThemeProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </AuthChecker>
      </QueryClientProvider>
    </TokenContext.Provider>
  );
}

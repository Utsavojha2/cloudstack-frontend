import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render as rtlRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import i18n from 'translations/i18n';

const queryClient = new QueryClient();
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export function mockNextUseRouter(props: {
  route: string;
  pathname: string;
  query: string;
  asPath: string;
}) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }));
}

export const translatedText = (key: string) =>
  i18n.getDataByLanguage('en-US')?.translation[key];

export * from '@testing-library/react';

function render(ui: React.ReactElement, options = {}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export { render };

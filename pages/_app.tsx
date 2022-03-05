import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from 'styled-components'
import 'styles/globals.css'
import theme from 'theme/theme'

const queryClient = new QueryClient()

const TopProgressBar = dynamic(() => import('containers/Loading/ProgressBar'), {
  ssr: false,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopProgressBar />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  )
}

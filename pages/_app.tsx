import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import i18n from 'i18next'
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from 'styled-components'
import 'styles/globals.css'
import theme from 'theme/theme'
import 'translations/i18n'

const queryClient = new QueryClient()

const TopProgressBar = dynamic(() => import('containers/Loading/ProgressBar'), {
  ssr: false,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

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

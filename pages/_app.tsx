import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const TopProgressBar = dynamic(() => import('containers/Loading/ProgressBar'), {
  ssr: false,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TopProgressBar />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

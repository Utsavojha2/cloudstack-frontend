import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useIsFetching, useIsMutating } from 'react-query'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function ProgressBar() {
  const isCurrentlyFetching = useIsFetching()
  const isCurrentlyMutating = useIsMutating()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true))
    Router.events.on('routeChangeComplete', () => setIsLoading(false))
    Router.events.on('routeChangeError', () => setIsLoading(false))
  }, [])

  if (isCurrentlyFetching || isCurrentlyMutating || isLoading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }

  return null
}

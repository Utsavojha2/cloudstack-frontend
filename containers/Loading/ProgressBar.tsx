import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useIsFetching } from 'react-query'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function ProgressBar() {
  const isFetching = useIsFetching()
  const [isLoading, setIsLoading] = useState(false)

  const setLoadState = (value: boolean) => setIsLoading(value)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoadState(true))
    Router.events.on('routeChangeComplete', () => setLoadState(false))
    Router.events.on('routeChangeError', () => setLoadState(false))
  }, [])

  if (isFetching || isLoading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }

  return null
}

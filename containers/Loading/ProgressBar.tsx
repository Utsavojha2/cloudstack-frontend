import { useState, useEffect } from 'react';
import Router from 'next/router';
import { useIsFetching, useIsMutating } from 'react-query';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar() {
  const isCurrentlyFetching = useIsFetching();
  const isCurrentlyMutating = useIsMutating();
  const [isLoading, setIsLoading] = useState(false);

  const onRouteChangeStart = () => {
    setIsLoading(true);
  };

  const onRouteChangePromiseSettled = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart);
    Router.events.on('routeChangeComplete', onRouteChangePromiseSettled);
    Router.events.on('routeChangeError', onRouteChangePromiseSettled);

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart);
      Router.events.off('routeChangeComplete', onRouteChangePromiseSettled);
      Router.events.off('routeChangeError', onRouteChangePromiseSettled);
    };
  }, []);

  if (isCurrentlyFetching || isCurrentlyMutating || isLoading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }

  return null;
}

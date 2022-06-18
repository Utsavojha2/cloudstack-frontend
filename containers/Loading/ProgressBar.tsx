import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIsFetching, useIsMutating } from 'react-query';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar() {
  const router = useRouter();
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
    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangePromiseSettled);
    router.events.on('routeChangeError', onRouteChangePromiseSettled);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangePromiseSettled);
      router.events.off('routeChangeError', onRouteChangePromiseSettled);
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

import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useAuth } from 'hooks/query/useAuth';
import RedirectingView from 'components/RedirectingView/RedirectingView';

interface RestrictedRouteWrapperProps {
  isTokenRefreshing: boolean;
}

const PublicRouteWrapper = ({
  children,
  isTokenRefreshing,
}: React.PropsWithChildren<RestrictedRouteWrapperProps>) => {
  const [isFetched, setIsFetched] = useState(false);
  const [isRouting, setIsRouting] = useState(false);

  const router = useRouter();
  const { data, isLoading } = useAuth({
    retry: false,
    onSettled: () => {
      setIsFetched(true);
    },
  });

  const authRoutes = [
    '/auth/login',
    '/auth/signup',
    '/auth/forgot-password',
    'auth/confirm-account',
  ];
  const isRestrictedRouteForAuthenticated = (restrictedRoutes: string[]) => {
    return restrictedRoutes.some((route) => router.pathname.includes(route));
  };

  useEffect(() => {
    if (
      !isTokenRefreshing &&
      !isLoading &&
      !!data &&
      isRestrictedRouteForAuthenticated(authRoutes)
    ) {
      setIsRouting(true);
      router
        .replace(data?.is_verified ? '/feed' : '/auth/verify')
        .then(() => setIsRouting(false));
    }
  }, [data, isLoading]);

  if (isLoading || !isFetched || isRouting || isTokenRefreshing) {
    return <RedirectingView />;
  }

  return <Fragment>{children}</Fragment>;
};

export default PublicRouteWrapper;

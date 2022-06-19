import React, { useEffect, useState, Fragment } from 'react';
import { useAuth } from 'hooks/query/useAuth';
import RedirectingView from 'components/RedirectingView/RedirectingView';
import { useRouter } from 'next/router';
import { isEqual } from 'lodash';
import { IUserResponse } from 'types/auth';

interface AuthCheckerProps {
  isTokenRefreshing: boolean;
}

export default function AuthChecker({
  children,
  isTokenRefreshing,
}: React.PropsWithChildren<AuthCheckerProps>) {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [loggedInStatus, setLoggedInStatus] = useState<IUserResponse | null>(
    null
  );

  const { data, isLoading, isError } = useAuth({
    retry: false,
    onSettled: (data) => {
      setLoggedInStatus(data ?? null);
    },
  });

  const onRedirectingActionsForExceptions = (url: string) => {
    if (isEqual(url, router.pathname)) return;
    setIsRedirecting(true);
    router.replace(url).then(() => setIsRedirecting(false));
  };

  const waitingState =
    isLoading ||
    isRedirecting ||
    isTokenRefreshing ||
    typeof loggedInStatus === 'undefined';

  useEffect(() => {
    if (!waitingState) {
      if (isError || !data) {
        onRedirectingActionsForExceptions('/auth/login');
        return;
      }
      if (!data?.is_verified) {
        onRedirectingActionsForExceptions('/auth/verify');
        return;
      }
      if (data?.is_verified && router.pathname.includes('/auth/verify')) {
        onRedirectingActionsForExceptions('/feed');
        return;
      }
    }
  }, [data, isLoading, isTokenRefreshing, isError]);

  if (waitingState) {
    return <RedirectingView />;
  }

  return <Fragment>{children}</Fragment>;
}

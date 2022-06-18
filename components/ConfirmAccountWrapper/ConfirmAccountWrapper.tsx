import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import setupInterceptors from 'config/interceptor';
import { AppDispatchContext } from 'config/token.context';
import useAppContext from 'config/app.context';
import RedirectingView from 'components/RedirectingView/RedirectingView';
import { useConfirmationStatus } from 'hooks/query/useAccountConfirmation';
import { useAuth } from 'hooks/query/useAuth';
import axios from 'axios';

interface ConfirmAccountWrapperProps {
  isConfirmationPage?: boolean;
  children: React.ReactElement;
}

const ConfirmAccountWrapper: React.FC<ConfirmAccountWrapperProps> = ({
  children,
  isConfirmationPage = false,
}) => {
  const { data: userData } = useAuth({
    retry: false,
    refetchOnMount: 'always',
  });
  const { setToken } = useAppContext(AppDispatchContext);
  const router = useRouter();
  const accountId = router.query.accountId as string;

  const { refetch } = useConfirmationStatus(accountId, {
    enabled: !!accountId,
    retry: false,
    onSuccess: (response) => {
      setToken(response.accessToken);
      setupInterceptors(axios, response?.accessToken);
      router.push('/feed');
    },
    onError: () => {
      if (!!userData?.is_verified) {
        router.push('/feed');
        return;
      }
      router.push(!!userData ? '/auth/verify' : '/auth/login');
    },
  });

  useEffect(() => {
    if (userData?.is_verified) {
      router.replace('/feed');
      return;
    }
    if (router.isReady && !accountId && isConfirmationPage) {
      router.push('/auth/verify');
    }
  }, []);

  useEffect(() => {
    if (accountId) {
      if (userData && userData?.is_verified) return;
      refetch();
    }
  }, [userData]);

  if (!isConfirmationPage) {
    return children;
  }
  return <RedirectingView />;
};

export default ConfirmAccountWrapper;

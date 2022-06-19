import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppDispatchContext } from 'config/token.context';
import useAppContext from 'config/app.context';
import RedirectingView from 'components/RedirectingView/RedirectingView';
import { useConfirmationStatus } from 'hooks/query/useAccountConfirmation';
import { useAuth } from 'hooks/query/useAuth';
import { ToastContext } from 'config/toast.context';

interface ConfirmAccountWrapperProps {
  isConfirmationPage?: boolean;
  children: React.ReactElement;
}

const ConfirmAccountWrapper: React.FC<ConfirmAccountWrapperProps> = ({
  children,
  isConfirmationPage = false,
}) => {
  const { data: userData, isLoading } = useAuth({
    retry: false,
    enabled: isConfirmationPage,
  });
  const { setToken } = useAppContext(AppDispatchContext);
  const { showMessage } = useAppContext(ToastContext);
  const router = useRouter();
  const accountId = router.query.accountId as string;

  const { refetch } = useConfirmationStatus(accountId, {
    enabled: !!accountId,
    retry: false,
    onSuccess: (response) => {
      setToken(response.accessToken);
      router.push('/feed');
      showMessage('Account Confirmed');
    },
    onError: () => {
      if (isLoading) return;
      if (!!userData?.is_verified) {
        router.push('/feed');
        return;
      }
      router.push(!!userData ? '/auth/verify' : '/auth/login');
    },
  });

  useEffect(() => {
    if (router.isReady && !accountId && isConfirmationPage) {
      router.push('/auth/verify');
    }
  }, []);

  useEffect(() => {
    if (accountId && userData?.is_verified !== true) {
      refetch();
    }
  }, [userData]);

  if (!isConfirmationPage) {
    return children;
  }
  return <RedirectingView />;
};

export default ConfirmAccountWrapper;

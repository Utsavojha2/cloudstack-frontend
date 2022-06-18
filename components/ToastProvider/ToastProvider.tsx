import React, { useState } from 'react';
import Snackbar from 'components/Common/Snackbar/Snackbar';
import { ToastContext } from 'config/toast.context';

type IToast = string | null;
type IToastType = 'success' | 'error' | 'info' | 'warning';

export default function ToastContextProvider<T = Record<string, unknown>>({
  children,
}: React.PropsWithChildren<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<IToast>(null);
  const [toastType, setToastType] = useState<IToastType>('success');

  const resetConfig = () => {
    setIsOpen(false);
    setToastMessage(null);
  };

  const showMessage = (message: string, type: IToastType = 'success') => {
    setIsOpen(true);
    setToastMessage(message);
    setToastType(type);
  };

  return (
    <ToastContext.Provider value={{ showMessage }}>
      <Snackbar
        open={isOpen}
        onClose={resetConfig}
        toastMessage={toastMessage as string}
        severity={toastType}
      />
      {children}
    </ToastContext.Provider>
  );
}

import { createContext } from 'react';

type IToastType = 'success' | 'error' | 'info' | 'warning';
interface IToastContext {
  showMessage: (message: string, type?: IToastType) => void;
}

const contextDefaultValues: IToastContext = {
  showMessage: () => null,
};

export const ToastContext = createContext<IToastContext>(contextDefaultValues);

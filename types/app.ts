import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';

export type IError = {
  statusCode: number;
  message: string | Array<string>;
} | null;

export interface IAppProps extends AppProps {
  Component: NextComponentType & {
    isGuestPage?: boolean;
    isConfirmAccountPage?: boolean;
    Layout?: () => JSX.Element;
  };
}

export interface IToastConfig {
  message: string | null;
  type: 'success' | 'error' | 'info' | 'warning';
  open?: boolean;
}

import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';

export type IError = {
  statusCode: number;
  message: string | Array<string>;
};

export interface IAppProps extends AppProps {
  Component: NextComponentType & {
    isGuestPage?: boolean;
    Layout?: () => JSX.Element;
  };
}

export type IGlobalError = null | IError;

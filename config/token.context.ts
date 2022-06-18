import { createContext } from 'react';

type ITokenContext = {
  accessToken: string | null;
  setToken: (token: string) => void;
};

const contextDefaultValues: ITokenContext = {
  accessToken: null,
  setToken: () => null,
};

export const AppContext =
  createContext<Pick<ITokenContext, 'accessToken'>>(contextDefaultValues);
export const AppDispatchContext =
  createContext<Pick<ITokenContext, 'setToken'>>(contextDefaultValues);

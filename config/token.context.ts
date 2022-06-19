import { createContext } from 'react';
import { ITokenType } from 'types/auth';

type ITokenContext = {
  accessToken: ITokenType;
  setToken: (token: ITokenType) => void;
};

const contextDefaultValues: ITokenContext = {
  accessToken: null,
  setToken: () => null,
};

export const AppContext =
  createContext<Pick<ITokenContext, 'accessToken'>>(contextDefaultValues);
export const AppDispatchContext =
  createContext<Pick<ITokenContext, 'setToken'>>(contextDefaultValues);

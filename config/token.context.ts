import { createContext, useContext } from 'react';

type ITokenContext = {
  accessToken: string;
  setToken: (val: string, callbackFn?: () => void) => void;
};

const contextDefaultValues: ITokenContext = {
  accessToken: '',
  setToken: () => null,
};

export const TokenContext = createContext<ITokenContext>(contextDefaultValues);

export default function useTokenContext() {
  return useContext(TokenContext);
}

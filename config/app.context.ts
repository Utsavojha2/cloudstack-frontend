import { Context, useContext } from 'react';

export default function useAppContext<T>(contextType: Context<T>) {
  return useContext(contextType);
}

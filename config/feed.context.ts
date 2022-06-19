import { createContext } from 'react';

interface IDrawerContext {
  isOpen: boolean;
  closeDrawer: () => void;
  openDrawer: () => void;
}

const contextDefaultValues: IDrawerContext = {
  isOpen: false,
  closeDrawer: () => null,
  openDrawer: () => null,
};

export const FeedContext = createContext<IDrawerContext>(contextDefaultValues);

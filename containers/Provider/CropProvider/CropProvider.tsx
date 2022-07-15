import React, { createContext, useReducer } from 'react';
import { Crop, PixelCrop } from 'react-image-crop';
import {
  ICropProviderProps,
  ICropAction,
  ICropActionType,
  ICropState,
  ICropContext,
} from 'containers/Provider/CropProvider/types';

const initialState: ICropState = {
  initialCrop: undefined,
  completeCrop: undefined,
};

const cropReducer = (
  state: ICropState,
  action: ICropActionType
): ICropState => {
  switch (action.type) {
    case ICropAction.SET_INTIAL_CROP:
      return { ...state, initialCrop: action.payload as Crop };
    case ICropAction.SET_COMPLETE_CROP:
      return { ...state, completeCrop: action.payload as PixelCrop };
    case ICropAction.RESET_INTIAL_CROP:
      return { ...state, initialCrop: undefined };
    case ICropAction.RESET_COMPLETE_CROP:
      return { ...state, completeCrop: undefined };
    default:
      return state;
  }
};

export const CropContext = createContext<ICropContext | undefined>(undefined);

const CropProvider: React.FC<ICropProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cropReducer, initialState);

  const value = {
    initialCrop: state.initialCrop,
    completeCrop: state.completeCrop,
    setInitialCrop: (crop: Crop) => () => {
      dispatch({ type: ICropAction.SET_INTIAL_CROP, payload: crop });
    },
    resetInitialCrop: () => {
      dispatch({
        type: ICropAction.RESET_INTIAL_CROP,
      });
    },
    setCompleteCrop: (crop: PixelCrop) => () => {
      dispatch({ type: ICropAction.SET_COMPLETE_CROP, payload: crop });
    },
    resetCompleteCrop: () => {
      dispatch({
        type: ICropAction.RESET_COMPLETE_CROP,
      });
    },
  };

  return <CropContext.Provider value={value}>{children}</CropContext.Provider>;
};

export default CropProvider;

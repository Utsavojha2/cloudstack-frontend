import { ReactNode } from 'react';
import { Crop, PixelCrop } from 'react-image-crop';

export enum ICropAction {
  SET_INTIAL_CROP = 'SET_INTIAL_CROP',
  SET_COMPLETE_CROP = 'SET_COMPLETE_CROP',
  RESET_INTIAL_CROP = 'RESET_INTIAL_CROP',
  RESET_COMPLETE_CROP = 'RESET_COMPLETE_CROP',
}

export interface ICropActionType {
  type: ICropAction;
  payload?: Crop | PixelCrop;
}

export interface ICropProviderProps {
  children: ReactNode;
}

export interface ICropState {
  readonly initialCrop: Crop | undefined;
  readonly completeCrop: PixelCrop | undefined;
}

export interface ICropContext extends ICropState {
  readonly setInitialCrop: (crop: Crop) => () => void;
  readonly setCompleteCrop: (crop: PixelCrop) => () => void;
  readonly resetInitialCrop: () => void;
  readonly resetCompleteCrop: () => void;
}

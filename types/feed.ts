import { Dispatch, SetStateAction } from 'react';
import { Photo } from 'react-photo-album';
import { IUser } from 'types/auth';

export interface ICustomPhoto extends Photo {
  id: string;
  coverPostUri: string;
  likes: number;
  comments: number;
  user: IUser;
}

export interface IFeedPostProps {
  text?: string;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  closeEmojiPicker: (value: boolean) => void;
  textareaValue: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export interface ICreatePostProps {
  isCreatePostModalOpen: boolean;
  handleClose: () => void;
}

export interface IPostLayoutProps {
  handleClose: () => void;
  isEditMode?: boolean;
  onSaveAndExit: () => void;
  onPublishPost: () => void;
}

export interface ISelectedImageProps extends File {
  preview: string;
}

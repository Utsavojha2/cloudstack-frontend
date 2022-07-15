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
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  closeEmojiPicker: (value: boolean) => void;
}

export interface ICreatePostProps {
  isCreatePostModalOpen: boolean;
  handleClose: () => void;
}

export interface IPostLayoutProps {
  handleClose: () => void;
  isEditMode?: boolean;
}

export interface ISelectedImageProps extends File {
  preview: string;
}


export interface IPost {
  id: string;
  content: string;
  coverPostUri: string;
  likes: number;
  comments: number;
  user: {
    id: string;
    name: string;
  };
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

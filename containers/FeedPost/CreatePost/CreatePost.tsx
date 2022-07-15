import React, { useState, ChangeEvent, useEffect } from 'react';
import difference from 'lodash/difference';
import Dialog from '@mui/material/Dialog';
import PostLayout from 'layouts/PostLayout/PostLayout';
import CloseIcon from '@mui/icons-material/Close';
import FeedPost from 'containers/FeedPost/FeedPost';
import MuiTransition from 'components/Common/MuiTransition/MuiTransition';
import { isImageExtensionEligible } from 'utils';
import {
  StyledImageList,
  StyledImageListItem,
  CloseIconContainer,
} from 'containers/FeedPost/styles';
import { ICreatePostProps, ISelectedImageProps } from 'types/feed';
import useAppContext from 'config/app.context';
import { ToastContext } from 'config/toast.context';
import { FormProvider, useForm } from 'react-hook-form';

const TOTAL_UPLOAD_LIMIT = 3;

const CreateFeed: React.FC<ICreatePostProps> = ({
  isCreatePostModalOpen,
  handleClose,
}) => {
  const { showMessage } = useAppContext(ToastContext);
  const methods = useForm();
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  const [selectedImageFiles, setSelectedImageFiles] = useState<
    Array<ISelectedImageProps>
  >([]);

  useEffect(() => {
    return () => {
      selectedImageFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  const onDialogBodyClick = () => {
    if (!isEmojiDropdownOpen) return;
    setIsEmojiDropdownOpen(false);
  };

  const onCloseEmojiPicker = (value: boolean) => {
    setIsEmojiDropdownOpen(value);
  };

  const showLimitReachedError = () => {
    showMessage('A max of 3 image files are allowed at most', 'error');
  };

  const onPostFileChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const userSelectedFiles = e.target.files;
    if (!userSelectedFiles || !userSelectedFiles.length) return;
    const selectedImageFiles = Array.from(userSelectedFiles);
    const invalidUploadExtensions = selectedImageFiles.filter((postFile) => {
      return !isImageExtensionEligible(postFile.name);
    });
    const eligibleUploads = difference(
      selectedImageFiles,
      invalidUploadExtensions
    );
    if (!!invalidUploadExtensions.length) {
      showMessage('Invalid file extension', 'error');
    }
    if (eligibleUploads.length > 3) {
      showLimitReachedError();
    }
    setSelectedImageFiles((prevSelectedImages) => {
      const totalImages = [
        ...prevSelectedImages,
        ...eligibleUploads.slice(0, TOTAL_UPLOAD_LIMIT),
      ];
      const isLimitReached = totalImages.length > TOTAL_UPLOAD_LIMIT;
      if (isLimitReached) showLimitReachedError();
      if (prevSelectedImages.length === TOTAL_UPLOAD_LIMIT) {
        showMessage('Cannot add more images', 'error');
        return prevSelectedImages;
      }
      const files = totalImages.slice(0, 3).map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      return files;
    });
  };

  const onRemoveFile = (previewId: string) => () => {
    setSelectedImageFiles((prevSelectedImages) =>
      prevSelectedImages.filter((file) => file.preview !== previewId)
    );
  };

  return (
    <Dialog
      fullScreen
      open={isCreatePostModalOpen}
      onClose={handleClose}
      TransitionComponent={MuiTransition}
      onClick={onDialogBodyClick}
    >
      <FormProvider {...methods}>
        <PostLayout handleClose={handleClose} />
        <FeedPost
          onFileChange={onPostFileChanges}
          isOpen={isEmojiDropdownOpen}
          closeEmojiPicker={onCloseEmojiPicker}
        />
        <StyledImageList cols={3} rowHeight={300}>
          {selectedImageFiles.map(({ preview }) => (
            <StyledImageListItem key={preview}>
              <CloseIconContainer onClick={onRemoveFile(preview)}>
                <CloseIcon />
              </CloseIconContainer>
              <img src={preview} alt={preview} />
            </StyledImageListItem>
          ))}
        </StyledImageList>
      </FormProvider>
    </Dialog>
  );
};

export default CreateFeed;

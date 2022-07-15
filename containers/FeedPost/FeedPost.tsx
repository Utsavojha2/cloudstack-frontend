import React, { useRef, MouseEvent } from 'react';
import dynamic from 'next/dynamic';
import { IEmojiData } from 'emoji-picker-react';
import IconButton from '@mui/material/IconButton';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoIcon from '@mui/icons-material/Photo';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import { IFeedPostProps } from 'types/feed';
import {
  StyledDiaglogSection,
  StyledDiaglogBody,
  StyledDialogActionButtons,
  StyledEmojiSection,
  EmojiPickerContainer,
  StyledMuiTextArea,
  StyledPostVisibility,
  StyledPostHeader,
} from 'containers/FeedPost/styles';
import ReactHookFormSelect from 'components/Form/ReactSelect/ReactSelect';
import { Controller, useFormContext } from 'react-hook-form';

const EmojiPickerNoSSRWrapper = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
});

const postVisibilityOptions = [
  { label: 'Public', value: 'public' },
  { label: 'Followers', value: 'followers' },
  { label: 'Only Me', value: 'private' },
];

const FeedPost: React.FC<IFeedPostProps> = ({
  onFileChange,
  isOpen,
  closeEmojiPicker,
}) => {
  const { setValue, control, getValues } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onEmojiClick = (_event: MouseEvent, emojiObject: IEmojiData) => {
    const textareaValue = getValues('postValue');
    setValue('postValue', textareaValue + emojiObject.emoji);
  };

  return (
    <StyledDiaglogSection>
      <StyledDiaglogBody>
        <StyledPostHeader>
          <StyledDialogActionButtons>
            <StyledEmojiSection>
              <IconButton
                aria-label="close"
                onClick={() => closeEmojiPicker(!isOpen)}
                title="Add an emoji"
              >
                <EmojiEmotionsIcon />
              </IconButton>
              {isOpen && (
                <EmojiPickerContainer onClick={(e) => e.stopPropagation()}>
                  <EmojiPickerNoSSRWrapper
                    onEmojiClick={onEmojiClick}
                    preload
                    searchPlaceholder="Reflect your mood"
                  />
                </EmojiPickerContainer>
              )}
            </StyledEmojiSection>
            <IconButton
              aria-label="close"
              onClick={() => fileInputRef.current?.click()}
              title="Open User Gallery"
            >
              <PhotoIcon />
              <input
                ref={fileInputRef}
                type="file"
                multiple
                id="file-input"
                name="file-input"
                onChange={onFileChange}
                accept="image/x-png,image/gif,image/jpeg"
                hidden
              />
            </IconButton>

            <IconButton aria-label="close" title="Schedule a post">
              <ScheduleSendIcon />
            </IconButton>
          </StyledDialogActionButtons>
          <StyledPostVisibility>
            <ReactHookFormSelect
              selectOptions={postVisibilityOptions}
              name="postVisbility"
              label="Post Visibility"
            />
          </StyledPostVisibility>
        </StyledPostHeader>
        <Controller
          name={'postValue'}
          control={control}
          render={({ field }) => (
            <StyledMuiTextArea
              minRows={10}
              maxRows={20}
              placeholder="What's on your mind?"
              {...field}
            />
          )}
        />
      </StyledDiaglogBody>
    </StyledDiaglogSection>
  );
};

export default FeedPost;

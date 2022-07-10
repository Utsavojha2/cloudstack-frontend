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
} from 'containers/FeedPost/styles';

const EmojiPickerNoSSRWrapper = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
});

const FeedPost: React.FC<IFeedPostProps> = ({
  onFileChange,
  isOpen,
  closeEmojiPicker,
  textareaValue,
  setValue,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onEmojiClick = (_event: MouseEvent, emojiObject: IEmojiData) => {
    setValue((prevInput: string) => prevInput + emojiObject.emoji);
  };

  return (
    <StyledDiaglogSection>
      <StyledDiaglogBody>
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
        <StyledMuiTextArea
          minRows={10}
          maxRows={20}
          placeholder="What's on your mind?"
          onChange={(e) => setValue(e.target.value)}
          value={textareaValue}
        />
      </StyledDiaglogBody>
    </StyledDiaglogSection>
  );
};

export default FeedPost;

import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const StyledDiaglogSection = styled.section`
  width: 100%;
  padding: 50px 0;
  display: grid;
  place-items: center;
`;

export const StyledPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPostVisibility = styled.div`
  padding-right: 25px;
`;

export const StyledDiaglogBody = styled.div`
  position: relative;
  width: 600px;
  max-height: fit-content;
  margin: 20px auto;
  border-radius: 10px;
  padding-bottom: 20px;
  background: #eee;
  color: #000;
  box-shadow: 0 0 4px rgb(0 0 0 / 55%);
`;

export const StyledDialogActionButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  column-gap: 3px;
  & svg {
    color: ${({ theme }) => theme.palette.grey[500]};
    cursor: pointer;
  }
`;

export const StyledEmojiSection = styled.div``;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  z-index: 10001;
  bottom: -294px;
  left: 0px;
`;

export const StyledMuiTextArea = styled(TextareaAutosize)`
  padding: 15px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  border-top: none;
  border-bottom: none;
  border-color: #eee;
  resize: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    font-size: 18px;
    opacity: 0.5;
  }
`;

export const StyledImageList = styled(ImageList)`
  ${({ theme }) => ` 
    width: 800px;
    margin: 0 auto;
    overflow-y: initial;
    grid-gap: 20px !important;
    justify-content: center;
    ${theme.breakpoints.down('lg')} {
     grid-template-columns: repeat(2, 1fr) !important;
     justify-content: center;
     margin-bottom: 20px;
    }
    ${theme.breakpoints.down('md')} {
        grid-template-columns: 1fr !important;
        padding: 0 20px 20px;
        max-width: 100%;
        place-items: center;
        grid-gap: 15px;
    }
  `};
`;

export const StyledImageListItem = styled(ImageListItem)`
  ${({ theme }) => ` 
   position: relative;
   box-shadow: 0 0 4px rgb(0 0 0 / 55%);
   padding: 15px;
   background:  ${theme.palette.grey[100]};
   border-radius: 12px;
   height: 350px !important;
    & img {
      max-height: 100%;
    }
    ${theme.breakpoints.down('md')} {
      height: auto !important;
      width: 500px;
    }
    ${theme.breakpoints.down('sm')} {
        width: 400px;
    }
    ${theme.breakpoints.down('xs')} {
        width: 250px;
    }
`};
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: gray;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
  & svg {
    color: #fff;
  }
`;

import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import InputForm from 'components/Form/InputForm/InputForm';
import TextareaAutosize from '@mui/material/TextareaAutosize';

interface IStyledDPWrappper {
  isPreview?: boolean;
}

export const StyledDetailWrapper = styled(FormProvider)``;

export const StyledCoverImage = styled.div`
  width: 100%;
  position: relative;

  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  & button {
    position: absolute;
    bottom: 30px;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    padding: 6px 12px;
    border-radius: 6px;
    outline: none;
    border: none;
    cursor: pointer;
    z-index: 100;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StyledFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 150px;
  position: relative;
  top: -65px;
`;

export const StyledDPWrapper = styled.div<IStyledDPWrappper>`
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.action.active};
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  & img {
    height: ${({ isPreview }) => (isPreview ? '55px' : '200px')};
    width: ${({ isPreview }) => (isPreview ? '55px' : '200px')};
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledFormButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
`;

export const StyledUserName = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

export const StyledNameWrapper = styled.div``;

export const StyledFormWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 50px;
`;

export const StyledFormItemsWrapper = styled.div`
  width: 680px;
`;

export const StyledDivider = styled(Divider)`
  margin: 20px 0;
`;

export const StyledInputForm = styled(InputForm)`
  width: 100%;
`;

export const StyledPhotoDropzone = styled.div`
  height: 235px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 12px;
  display: grid;
  place-items: center;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const StyledUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 5px;
  & * {
    font-weight: light;
    text-align: center;
  }
`;

export const StyledMuiTextArea = styled(TextareaAutosize)`
  padding: 15px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  border-color: lightgray;
  font-family: inherit;
  resize: none;
  font-size: 16px;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`;

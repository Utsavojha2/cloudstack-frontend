import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import 'react-image-crop/dist/ReactCrop.css';
import { ReactCropProps } from 'react-image-crop';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { H3 } from 'components/Common/Typography/Typography';
import ImageCrop from 'components/ImageCrop/ImageCrop';
import * as Button from 'components/Common/Buttons/Buttons';

interface IPictureResizeProps extends Partial<ReactCropProps> {
  imageSrc: string;
  onClose(): void;
}

const PictureResize: React.FC<IPictureResizeProps> = ({
  imageSrc,
  onClose,
  ...props
}) => {
  const { control, watch } = useFormContext();
  const scaleValue = watch('imageScale');

  return (
    <StyledPictureResize>
      <StyledResizeHeader>
        <H3>Image Crop</H3>
      </StyledResizeHeader>
      <StyledResizeWrapper>
        <ImageCrop {...props} imageSrc={imageSrc} scale={scaleValue} />
      </StyledResizeWrapper>
      <StyledImageScaler>
        <InsertPhotoIcon />
        <Controller
          name="imageScale"
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <Slider
              {...field}
              valueLabelDisplay="auto"
              max={3}
              step={0.1}
              min={1}
            />
          )}
        />
        <InsertPhotoIcon />
      </StyledImageScaler>
      <StyledActionButtons>
        <Button.MuiSecondaryButton onClick={onClose}>Cancel</Button.MuiSecondaryButton>
        <Button.MuiPrimaryButton>Save Crop</Button.MuiPrimaryButton>
      </StyledActionButtons>
    </StyledPictureResize>
  );
};

const StyledPictureResize = styled.div`
  width: 600px;
`;

const StyledResizeHeader = styled.div`
  padding: 12px 15px;
  display: grid;
  place-items: center;
  width: 100%;
`;

const StyledResizeWrapper = styled.div`
  height: 400px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.grey[100]};

  & .portrait-crop {
    height: 100%;

    & .ReactCrop__child-wrapper {
      height: 100%;
    }
  }

  & div {
    max-width: 100%;
    max-height: 100%;
  }

  & img {
    object-fit: contain;
    height: auto;
    max-width: 600px;
    max-height: 400px;
    min-height: 250px;
  }
`;

const StyledImageScaler = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;
  padding: 10px 20px;

  & > *:first-child {
    margin-right: 10px;
    width: 22px;
    height: 22px;
  }

  & > *:last-child {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }

  & .MuiSlider-root {
    width: 200px;
  }
`;

const StyledActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 16px;
  padding: 10px 20px 20px;
`;

export default PictureResize;

import React, { useState } from 'react';
import ReactCrop, { ReactCropProps } from 'react-image-crop';
import useAppContext from 'config/app.context';
import { CropContext } from 'containers/Provider/CropProvider/CropProvider';
import { ICropContext } from 'containers/Provider/CropProvider/types';
import { centerAspectCrop } from './utils';

interface IImageCropProps extends Partial<ReactCropProps> {
  imageSrc: string;
  scale?: number;
}

const ImageCrop: React.FC<IImageCropProps> = ({
  imageSrc,
  scale = 1,
  aspect,
  ...props
}) => {
  const { initialCrop, setInitialCrop, setCompleteCrop } = useAppContext(
    CropContext
  ) as ICropContext;
  const [isImagePortrait, setIsImagePortrait] = useState(false);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (!aspect) return;
    const { width, height } = e.currentTarget;
    setInitialCrop(centerAspectCrop(width, height, aspect));
    if (aspect === 1) setIsImagePortrait(width <= height);
  }

  return (
    <ReactCrop
      {...props}
      crop={initialCrop}
      onChange={(_, percentCrop) => setInitialCrop(percentCrop)}
      onComplete={(c) => setCompleteCrop(c)}
      className={(isImagePortrait && 'portrait-crop') || ''}
    >
      <img
        alt="Croppable-image"
        src={imageSrc}
        style={{ transform: `scale(${scale})` }}
        onLoad={onImageLoad}
      />
    </ReactCrop>
  );
};

export default ImageCrop;

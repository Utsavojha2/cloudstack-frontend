import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

interface SkeletonVariantProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: number;
  height?: number;
  animateType?: 'wave' | false;
  styles?: {
    marginBottom?: number;
    marginTop?: number;
  };
}

const SkeletonVariant: React.FC<SkeletonVariantProps> = ({
  variant = 'text',
  width,
  height,
  animateType = false,
  styles = {},
}) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      animation={animateType}
      style={styles}
    />
  );
};

export default SkeletonVariant;

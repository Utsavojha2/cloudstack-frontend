import React from 'react';
import Avatar from '@mui/material/Avatar';

interface AvatarProps {
  altText: string;
  source: string;
  variant?: 'square' | 'rounded';
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const MuiAvatar: React.FC<AvatarProps> = ({
  altText,
  source,
  variant = 'rounded',
  width,
  height,
  children,
}): JSX.Element => {
  return (
    <Avatar variant={variant} src={source} alt={altText} sx={{ width, height }}>
      {children}
    </Avatar>
  );
};

export default MuiAvatar;

import React, { useCallback } from 'react';
import PhotoAlbum, { PhotoProps } from 'react-photo-album';
import styled from 'styled-components';
import Box from '@mui/system/Box';
import { H2 } from 'components/Common/Typography/Typography';
import { gridSettings } from './helpers';

const UserFeed: React.FC = () => {
  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: PhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          boxShadow:
            gridSettings.columns > 0
              ? '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
              : 'none',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
        {...rest}
      />
    ),
    [gridSettings.spacing, gridSettings.padding]
  );

  return (
    <UserFeedSection>
      <HeadingBox>
        <H2>Feed</H2>
      </HeadingBox>
      <UserFeedContent>
        <Box sx={{ width: '100%', mx: 'auto' }}>
          <PhotoAlbum
            photos={[]}
            layout="columns"
            columns={gridSettings.columns}
            spacing={gridSettings.spacing}
            padding={gridSettings.padding}
            targetRowHeight={gridSettings.targetRowHeight}
            renderPhoto={renderPhoto}
          />
        </Box>
      </UserFeedContent>
    </UserFeedSection>
  );
};

const UserFeedSection = styled.section`
  padding-top: 32px;
`;

const HeadingBox = styled(Box)`
  padding-bottom: 16px;
`;

const UserFeedContent = styled.section``;

export default UserFeed;

import React, { useEffect, useState } from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album';
import styled from 'styled-components';
import Box from '@mui/system/Box';
import { H2, P2 } from 'components/Common/Typography/Typography';
import { gridSettings } from './helpers';
import PersonIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import { IPost } from 'types/feed';

interface Props {
  posts: Array<IPost>;
  onLoadMore: () => void;
}

interface CustomPhotoType extends Photo, IPost {}

const UserFeed: React.FC<Props> = ({ posts, onLoadMore }) => {
  const [images, setImages] = useState<CustomPhotoType[]>([]);

  const aspectRatio = (height: number, width: number) => {
    if (height > width) {
      return { width: 1, height: height / width };
    } else {
      return { height: 1, width: width / height };
    }
  };

  const parsePhotosForGallery = (imgArr: Props['posts']) => {
    const imgs: CustomPhotoType[] = [];
    imgArr.forEach((img) => {
      const mockImage = document.createElement('img');
      const src = img.coverPostUri;

      mockImage.src = src;
      mockImage.onload = function () {
        const aspect = aspectRatio(mockImage.height, mockImage.width);
        imgs.push({
          ...img,
          src: src,
          width: aspect.width,
          height: aspect.height,
          alt: img.content,
        });
      };
    });
    return imgs;
  };

  useEffect(() => {
    if (!posts.length) return;
    setImages(parsePhotosForGallery(posts));
    return () => {
      setImages([]);
    };
  }, [posts]);

  return (
    <UserFeedSection>
      <HeadingBox>
        <H2>Feed</H2>
      </HeadingBox>
      <UserFeedContent>
        <Box sx={{ width: '100%', mx: 'auto' }}>
          <PhotoAlbum<Photo & IPost>
            photos={images}
            layout="masonry"
            columns={gridSettings.columns}
            spacing={gridSettings.spacing}
            padding={gridSettings.padding}
            targetRowHeight={gridSettings.targetRowHeight}
            renderPhoto={({ imageProps: { alt, style, ...rest }, photo }) => (
              <UserPostItem>
                <PostImage alt={alt} style={style} {...rest} />
                <Grid
                  container
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <UserIcon />
                      </Grid>
                      <Grid item>
                        <PostContent>{photo.content}</PostContent>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <PostTime>2h ago</PostTime>
                  </Grid>
                </Grid>
              </UserPostItem>
            )}
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

const UserPostItem = styled.div`
  margin-bottom: ${gridSettings.spacing as number}px;
  cursor: pointer;
`;

const PostTime = styled(P2)`
  color: '#868686';
`;

const UserIcon = styled(PersonIcon)`
  fill: darkgray;
`;

const PostImage = styled.img`
  margin-bottom: 5px;
  border-radius: 12px;
`;

const PostContent = styled(P2)`
  font-weight: bold;
  margin-left: 5px;
  text-overflow: ellipsis;
  max-width: 200px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
`;

export default UserFeed;

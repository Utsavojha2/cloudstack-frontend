import React from 'react';
import styled from 'styled-components';
import Box from '@mui/system/Box';
import { H2 } from 'components/Common/Typography/Typography';

const UserFeed: React.FC = () => {
  return (
    <UserFeedSection>
      <HeadingBox>
        <H2>Feed</H2>
      </HeadingBox>
    </UserFeedSection>
  );
};

const UserFeedSection = styled.section`
  padding-top: 32px;
`;

const HeadingBox = styled(Box)`
  padding-bottom: 16px;
`;

export default UserFeed;

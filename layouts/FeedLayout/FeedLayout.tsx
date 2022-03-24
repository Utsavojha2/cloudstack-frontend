import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from 'components/interface/Sidebar/Sidebar';
import styled from 'styled-components';

const UserFeed: React.FC = ({ children }) => {
  return (
    <FeedContainer>
      <Sidebar />
      <div>{children}</div>
    </FeedContainer>
  );
};

const FeedContainer = styled(Box)`
  display: flex;
`;

export default UserFeed;

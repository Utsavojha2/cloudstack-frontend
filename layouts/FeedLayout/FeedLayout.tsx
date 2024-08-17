import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from 'components/Layout/Sidebar/Sidebar';
import Header from 'components/Layout/Header/Header';
import theme from 'theme/theme';
import { FeedContext } from 'config/feed.context';

const UserFeed: React.FC = ({ children }) => {
  const isScreenSizeMedium = useMediaQuery(theme.breakpoints.up('lg'));
  const [isDrawerOpen, setIsDrawerOpen] = useState<undefined | boolean>(
    undefined
  );
  const isBackgroundOverlay = (isDrawerOpen ?? true) && !isScreenSizeMedium;

  useEffect(() => {
    setIsDrawerOpen(isScreenSizeMedium);
  }, [isScreenSizeMedium]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const providerValues = {
    isOpen: isDrawerOpen ?? true,
    closeDrawer,
    openDrawer,
  };

  return (
    <FeedContext.Provider value={providerValues}>
      <FeedContainer>
        <Sidebar />
        <FeedContentSection isOverlay={isBackgroundOverlay}>
          <Header />
          <div>{children}</div>
        </FeedContentSection>
      </FeedContainer>
    </FeedContext.Provider>
  );
};

interface FeedContentSectionProps {
  isOverlay: boolean;
}

const FeedContainer = styled(Box)`
  ${({ theme }) => `
    ${theme.breakpoints.up('lg')} {
      display: flex;
    }
  `};
`;

const FeedContentSection = styled.section<FeedContentSectionProps>`
  ${({ theme, isOverlay }) => `
    ${theme.breakpoints.up('md')} {
      padding-left: 64px;
      padding-right: 64px;
    }
    min-height: 100vh;
    width: 100%;
    padding-top: 24px;
    padding: 24px;
    background-color: ${isOverlay ? 'rgba(0, 0, 0, 0.35)' : 'auto'};
    opacity: ${isOverlay ? '0.4' : 'auto'};
  `};
`;

export default UserFeed;

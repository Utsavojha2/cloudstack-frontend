import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MuiPrimaryButton } from 'components/Common/Buttons/Buttons';
import theme from 'theme/theme';
import CreatePost from 'containers/FeedPost/CreatePost/CreatePost';
import useAppContext from 'config/app.context';
import { FeedContext } from 'config/feed.context';
import SearchBar from 'components/Layout/SearchBar/SearchBar';

const Header = () => {
  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
  const isScreenSizeSmallerMd = useMediaQuery(theme.breakpoints.down('md'));
  const { openDrawer } = useAppContext(FeedContext);

  const toggleFeedModal =
    (open = false) =>
    () => {
      setIsFeedModalOpen(open);
    };

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 0, md: 3 }} rowSpacing={2}>
      <CreatePost
        isCreatePostModalOpen={isFeedModalOpen}
        handleClose={toggleFeedModal()}
      />
      <Grid item xs={12} sm={6} md={6}>
        <Grid
          container
          justifyContent={isScreenSizeSmallerMd ? 'center' : 'flex-start'}
        >
          <IconButton
            onClick={openDrawer}
            aria-label="Hamburger Menu"
            sx={{
              display: { md: 'block', lg: 'none' },
              width: 50,
              height: 50,
              mr: 1,
            }}
          >
            <MenuIcon />
          </IconButton>

          <SearchBar />
        </Grid>
      </Grid>
      <Grid item sm={6} md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Grid container justifyContent="flex-end">
          <IconButton aria-label="Notification" sx={{ width: 50, height: 50 }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton
            aria-label="Message"
            sx={{
              ml: 2,
              width: 50,
              height: 50,
              display: { sm: 'none', md: 'block' },
            }}
          >
            <SendIcon />
          </IconButton>
          <MuiPrimaryButton sx={{ ml: 2 }} onClick={toggleFeedModal(true)}>
            <AddOutlinedIcon sx={{ mr: 1 }} />
            Add a post
          </MuiPrimaryButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

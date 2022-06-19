import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MuiPrimaryButton } from 'components/Common/Buttons/Buttons';
import theme from 'theme/theme';
import useAppContext from 'config/app.context';
import { FeedContext } from 'config/feed.context';

const Header = () => {
  const isScreenSizeSmallerMd = useMediaQuery(theme.breakpoints.down('md'));
  const { openDrawer } = useAppContext(FeedContext);

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 0, md: 3 }} rowSpacing={2}>
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

          <HeaderInputItem>
            <IconButton type="submit" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          </HeaderInputItem>
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
          <MuiPrimaryButton sx={{ ml: 2 }}>
            <AddOutlinedIcon sx={{ mr: 1 }} />
            Add a post
          </MuiPrimaryButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderInputItem = styled(Paper)`
  ${({ theme }) => `
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 400px;
    border: 1px solid lightgray;
    box-shadow: none;
    border-radius: 10px;
    ${theme.breakpoints.down('lg')} {
      width: 300px;
    }
    ${theme.breakpoints.down('md')} {
        width: 210px;
    }
    ${theme.breakpoints.down('sm')} {
        width: 250px;
    }
 `};
`;

export default Header;

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from 'config/axios.config';
import { useMutation } from 'react-query';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { CloseOutlined } from '@mui/icons-material';
import {
  MuiPrimaryButton,
  MuiSecondaryButton,
} from 'components/Common/Buttons/Buttons';
import AlertDialogSlide from 'components/Common/AlertDialog/AlertDialog';
import { H1, H2, H3, P1, P2 } from 'components/Common/Typography/Typography';
import { navigationItems } from 'components/Layout/Sidebar/helpers';
import * as Styled from 'components/Layout/Sidebar/Sidebar.styles';
import theme from 'theme/theme';
import { ToastContext } from 'config/toast.context';
import useAppContext from 'config/app.context';
import { FeedContext } from 'config/feed.context';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showMessage } = useAppContext(ToastContext);
  const isScreenSizeMedium = useMediaQuery(theme.breakpoints.up('lg'));
  const { isOpen, closeDrawer } = useAppContext(FeedContext);
  const isBackgroundOverlay = isOpen && !isScreenSizeMedium;

  const onLogoutActionRequest = async () => {
    return await axiosInstance.post('/v1/api/logout');
  };

  const { mutate } = useMutation(onLogoutActionRequest, {
    onSuccess: () => {
      showMessage('You are now logged out');
      router.reload();
    },
  });

  return (
    <Styled.MuiSidebar
      variant="persistent"
      anchor="left"
      open={isOpen}
      isOverlay={isBackgroundOverlay}
    >
      <Styled.DrawerHeader>
        <IconButton onClick={closeDrawer}>
          <CloseOutlined />
        </IconButton>
      </Styled.DrawerHeader>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item md={4}>
          <Grid container justifyContent="flex-end">
            <Styled.BrandLogo src={'/logo.png'} alt="" />
          </Grid>
        </Grid>
        <Grid item md={8}>
          <Grid
            container
            direction="column"
            height={'100%'}
            justifyContent="center"
          >
            <H1>CloudStack</H1>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <Styled.UserLogoWrapper>
          <img
            src={
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            }
            alt=""
          />
        </Styled.UserLogoWrapper>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item md={10}>
          <Styled.UserHeaderWrapper>
            <H2>Utsav Ojha</H2>
            <Styled.UserHandle>@utsavojha2</Styled.UserHandle>
          </Styled.UserHeaderWrapper>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={4}>
          <Styled.UserFeedInfo container direction="column" alignItems="center">
            <P1>42</P1>
            <P2>Posts</P2>
          </Styled.UserFeedInfo>
        </Grid>
        <Grid item xs={4}>
          <Styled.UserFeedInfo container direction="column" alignItems="center">
            <P1>2.8k</P1>
            <P2>Followers</P2>
          </Styled.UserFeedInfo>
        </Grid>
        <Grid item xs={4}>
          <Styled.UserFeedInfo
            container
            direction="column"
            alignItems="center"
            className="grid-lastcell"
          >
            <P1>526</P1>
            <P2>Following</P2>
          </Styled.UserFeedInfo>
        </Grid>
      </Grid>

      <Toolbar />
      <Divider />
      <List>
        {navigationItems.map(({ name, icon: ItemIcon, isAsyncAction }) => (
          <ListItem
            button
            key={name}
            sx={{ px: 5 }}
            onClick={() => setIsModalOpen(!!isAsyncAction)}
          >
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <ItemIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Grid container justifyContent="cente" sx={{ mt: 'auto', mb: 2 }}>
        <Grid item md={12}></Grid>
        <Grid item md={8} sx={{ ml: 3, mt: 2 }}>
          <Grid container justifyContent="" alignItems="center">
            <CopyrightIcon />
            <H3 sx={{ ml: 1 }}>CloudStack</H3>
          </Grid>
          <Grid container sx={{ ml: 0.5, mt: 0.5 }}>
            <P1>All rights reserved. 2022.</P1>
          </Grid>
        </Grid>
      </Grid>
      <AlertDialogSlide
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        title="Are you sure you want to logout?"
        contentMessage="You will be logged out of the application and insert in your credentials again if you want to log in."
        renderDialogActions={() => (
          <Box sx={{ pb: 1 }}>
            <MuiSecondaryButton
              onClick={() => setIsModalOpen(false)}
              sx={{ mr: 2 }}
            >
              Cancel
            </MuiSecondaryButton>
            <MuiPrimaryButton onClick={() => mutate()} sx={{ mr: 3 }}>
              Logout
            </MuiPrimaryButton>
          </Box>
        )}
      />
    </Styled.MuiSidebar>
  );
};

export default Sidebar;

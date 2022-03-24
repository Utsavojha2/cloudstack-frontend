import React, { useEffect, useState } from 'react';
import {
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
import { H1, H2, H3, P1, P2 } from 'components/common/Typography/Typography';
import { navigationItems } from 'components/interface/Sidebar/helpers';
import styles from './styles';
import theme from 'theme/theme';
import { CloseOutlined } from '@mui/icons-material';

const Sidebar = () => {
  const {
    MuiSidebar,
    BrandLogo,
    UserLogoWrapper,
    UserHeaderWrapper,
    UserHandle,
    UserFeedInfo,
    DrawerHeader,
  } = styles;
  const isScreenSizeMedium = useMediaQuery(theme.breakpoints.up('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(isScreenSizeMedium);

  useEffect(() => {
    setIsDrawerOpen(isScreenSizeMedium);
  }, [isScreenSizeMedium]);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <MuiSidebar variant="persistent" anchor="left" open={isDrawerOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <CloseOutlined />
        </IconButton>
      </DrawerHeader>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item md={4}>
          <Grid container justifyContent="flex-end">
            <BrandLogo src={'/logo.png'} alt="" />
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
        <UserLogoWrapper>
          <img
            src={
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            }
            alt=""
          />
        </UserLogoWrapper>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item md={10}>
          <UserHeaderWrapper>
            <H2>Utsav Ojha</H2>
            <UserHandle>@utsavojha2</UserHandle>
          </UserHeaderWrapper>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={4}>
          <UserFeedInfo container direction="column" alignItems="center">
            <P1>42</P1>
            <P2>Posts</P2>
          </UserFeedInfo>
        </Grid>
        <Grid item xs={4}>
          <UserFeedInfo container direction="column" alignItems="center">
            <P1>2.8k</P1>
            <P2>Followers</P2>
          </UserFeedInfo>
        </Grid>
        <Grid item xs={4}>
          <UserFeedInfo
            container
            direction="column"
            alignItems="center"
            className="grid-lastcell"
          >
            <P1>526</P1>
            <P2>Following</P2>
          </UserFeedInfo>
        </Grid>
      </Grid>

      <Toolbar />
      <Divider />
      <List>
        {navigationItems.map(({ name, icon: ItemIcon }) => (
          <ListItem button key={name} sx={{ px: 5 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <ItemIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Grid container justifyContent="cente" sx={{ mt: 'auto', mb: 2 }}>
        <Grid item md={12}>
          {/* <Divider /> */}
        </Grid>
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
    </MuiSidebar>
  );
};

export default Sidebar;

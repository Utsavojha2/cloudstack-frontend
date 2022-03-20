import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { H1, H2, P2 } from 'components/common/Typography/Typography'
import React from 'react'
import styled from 'styled-components'
import FeedIcon from '@mui/icons-material/Feed'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 350
const navigationItems = [
  {
    name: 'Feed',
    icon: <FeedIcon />,
  },
  {
    name: 'Explore',
    icon: <SearchIcon />,
  },
  {
    name: 'Profile',
    icon: <AccountCircleIcon />,
  },
  {
    name: 'Log Out',
    icon: <LogoutIcon />,
  },
]

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={true}
    >
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

      <Toolbar />
      <List>
        {navigationItems.map((item) => (
          <ListItem button key={item.name} sx={{ px: 5 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

const BrandLogo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`

const UserLogoWrapper = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.action.active};
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
`

const UserHeaderWrapper = styled.div`
  width: 100%;
  & > * {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const UserHandle = styled(P2)`
  text-align: center;
  display: block;
  margin-top: 5px;
`

export default Sidebar

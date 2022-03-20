import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { URL } from 'utils/static'

const drawerWidth = 350

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
      <BrandLogo src={URL.brandLogo} alt="" />
      <Toolbar />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>hello world</ListItemIcon> */}
            <ListItemText primary={text} />
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
  margin-left: 50px;
`

export default Sidebar

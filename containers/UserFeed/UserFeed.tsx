import React from 'react'
import Box from '@mui/material/Box'
import Sidebar from 'components/interface/Sidebar/Sidebar'

const UserFeed: React.FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <div>{children}</div>
    </Box>
  )
}

export default UserFeed

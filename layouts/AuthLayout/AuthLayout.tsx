import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const AuthLayout = () => {
  return (
    <Grid container spacing={10} justifyContent="center">
      <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <h1>login photo</h1>
      </Grid>
      <Grid item xs={10} md={6}>
        {/* <Grid container sx={{ display: { xs: 'block', md: 'none' } }}>
          <h1>just login form</h1>
        </Grid>
        <Paper sx={{ display: { xs: 'none', md: 'block' } }}>login form</Paper> */}

        <Paper>login form</Paper>
      </Grid>
    </Grid>
  )
}

export default AuthLayout

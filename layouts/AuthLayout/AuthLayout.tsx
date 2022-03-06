import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import { URL } from 'utils/static'
import { Card } from '@mui/material'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Grid
      container
      spacing={{ md: 10 }}
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid
        item
        md={6}
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <BackgroundImageLoginPage />
      </Grid>
      <LoginBoxGrid item xs={12} md={6}>
        <LoginBoxCard sx={{ mt: 25, mr: { xs: 0, md: 5 } }}>
          {children}
        </LoginBoxCard>
      </LoginBoxGrid>
    </Grid>
  )
}

const BackgroundImageLoginPage = styled.div`
  ${({ theme }) => `
   background-image: url(${URL.loginPage});
   background-size: contain;
   background-position: center;
   min-height: 100vh;

   ${theme.breakpoints.down('xl')}{
     background-size: cover;
   }
  `};
`

const LoginBoxGrid = styled(Grid)`
  ${({ theme }) => `
      background: ${theme.palette.grey[100]};
  `};
`

const LoginBoxCard = styled(Card)`
  ${({ theme }) => `
    max-width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    ${theme.breakpoints.up('xs')}{
        margin-left: 20px;
        margin-right: 20px;   
    }
    ${theme.breakpoints.up('sm')}{
        margin-left: auto;
        margin-right: auto;   
    }
    ${theme.breakpoints.up('md')}{
       margin-left: 0px;
       margin-right: 30px;
    }
    ${theme.breakpoints.up('lg')}{
        margin-left: auto;
        margin-right: auto;     
    }
  `};
`

export default AuthLayout

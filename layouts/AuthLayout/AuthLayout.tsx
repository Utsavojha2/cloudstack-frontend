import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import { CardActions, CardContent, Card } from '@mui/material'
import { H1 } from 'components/common/Typography/Typography'
import { URL } from 'utils/static'

const AuthLayout = () => {
  return (
    <Grid container spacing={10} justifyContent="cente">
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
          <CardContent>
            <H1>Word of the Day</H1>
          </CardContent>
          <CardActions></CardActions>
        </LoginBoxCard>
      </LoginBoxGrid>
    </Grid>
  )
}

const BackgroundImageLoginPage = styled.div`
  background-image: url(${URL.loginPage});
  background-size: contain;
  background-position: center;
  min-height: 100vh;

  @media screen and (max-width: 1460px) {
    background-size: cover;
  }
`

const LoginBoxGrid = styled(Grid)`
  ${({ theme }) => `
      background: ${theme.palette.primary.contrastText};
  `};
`

const LoginBoxCard = styled(Card)`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export default AuthLayout

import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import styled from 'styled-components';
import { H1, P1 } from 'components/Common/Typography/Typography';

const EmailVerification = () => {
  return (
    <GridContainer container alignItems="center" justifyContent="center">
      <GridItem item md={5}>
        <Stack spacing={4} sx={{ alignItems: 'start' }}>
          <IconContainer>
            <RocketLaunchRoundedIcon />
          </IconContainer>
          <VerificationTextContainer>
            <H1>Verify your account</H1>
            <P1>
              Account activation link has been sent to the email address you
              provided.
            </P1>
          </VerificationTextContainer>
          <Box sx={{ alignSelf: 'center' }}>ICON IS HERE</Box>
        </Stack>
      </GridItem>
    </GridContainer>
  );
};

const GridContainer = styled(Grid)`
  ${({ theme }) => ` 
    min-height: 100vh;
    background: ${theme.palette.grey[200]};
 `};
`;

const GridItem = styled(Grid)`
  background: #fff;
  padding: 20px 32px;
  border-radius: 22px;
`;

const IconContainer = styled(Box)`
  display: grid;
  place-items: center;
  padding: 8px;
  border: 1px solid black;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.grey[100]};
`;

const VerificationTextContainer = styled(Box)`
  & h1 {
    margin-bottom: 12px;
  }
`;

export default EmailVerification;

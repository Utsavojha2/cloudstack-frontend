import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import styled from 'styled-components';
import { H1, P1 } from 'components/Common/Typography/Typography';
import { MuiPrimaryButton } from 'components/Common/Buttons/Buttons';
import { MailOutlineOutlined } from '@mui/icons-material';
import useAppContext from 'config/app.context';
import { useAuth } from 'hooks/query/useAuth';
import { useResendMail } from 'hooks/query/useResendMail';
import { ToastContext } from 'config/toast.context';

const EmailVerification = () => {
  const { showMessage } = useAppContext(ToastContext);
  const { data, isLoading, refetch } = useAuth();

  const { mutate } = useResendMail(data?.id as string, {
    onSuccess: () => {
      showMessage('Verification email has been sent');
      refetch();
    },
  });

  const isEligibleForAnotherEmail =
    new Date().getDate() -
      new Date(data?.confirmAccountTokenUpdatedAt as string).getDate() >=
    2;

  return (
    <GridContainer container alignItems="center" justifyContent="center">
      <GridItem item xs={10} md={6} lg={4}>
        <Stack spacing={4} sx={{ alignItems: 'start' }}>
          <IconContainer>
            <RocketLaunchRoundedIcon />
          </IconContainer>
          <VerificationTextContainer>
            <H1>Verify your account</H1>
            <P1>
              Account activation link has been sent to the email address you
              provided. Email verification is necessary before you can access
              your news feed.
            </P1>
          </VerificationTextContainer>
          <Box>
            <MuiPrimaryButton
              onClick={() => mutate()}
              disabled={isLoading || !isEligibleForAnotherEmail}
            >
              <MailOutlineOutlined sx={{ mr: 2 }} />
              Resend Email
            </MuiPrimaryButton>
          </Box>
          {isEligibleForAnotherEmail ? null : <Box>PS: Check your spam!</Box>}
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
  padding: 20px 32px 40px;
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

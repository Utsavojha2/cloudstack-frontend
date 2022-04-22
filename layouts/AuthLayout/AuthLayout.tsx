import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Box, Chip, Skeleton } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { URL } from 'utils/static';
import useProgressiveImage from 'hooks/common/useProgressiveImage';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const loadedImage = useProgressiveImage(URL.loginPage);
  const { asPath: currentRoute } = useRouter();

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
        {loadedImage ? (
          <BackgroundImageLoginPage />
        ) : (
          <MuiSkeleton
            sx={{ height: '100vh' }}
            animation="wave"
            variant="rectangular"
          />
        )}
      </Grid>
      <LoginBoxGrid item xs={12} md={6}>
        <LanguageBox>
          <Link href={currentRoute} locale="en-US" passHref>
            <Chip label="English" variant="outlined" />
          </Link>
          <Link href={currentRoute} locale="fr" passHref>
            <Chip label="French" variant="outlined" sx={{ ml: 1 }} />
          </Link>
        </LanguageBox>
        <LoginBoxCard
          animate={{
            y: 200,
            scale: [1, 1.1, 1],
            borderRadius: ['0px', '10px', '0px'],
          }}
          transition={{ duration: 1 }}
        >
          {children}
        </LoginBoxCard>
      </LoginBoxGrid>
    </Grid>
  );
};

const MuiSkeleton = styled(Skeleton)`
  ${({ theme }) => `
      background-color:  ${theme.palette.grey[100]};
  `};
`;

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
`;

const LanguageBox = styled(Box)`
  position: absolute;
  right: 25px;
  top: 15px;
`;

const LoginBoxGrid = styled(Grid)`
  ${({ theme }) => `
      background: ${theme.palette.grey[200]};
  `};
`;

const LoginBoxCard = styled(motion.div)`
  ${({ theme }) => `
    background: ${theme.palette.grey[0]};
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
`;

export default AuthLayout;

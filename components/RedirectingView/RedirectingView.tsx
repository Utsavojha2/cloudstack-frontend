import React from 'react';
import styled from 'styled-components';
import { motion, MotionConfig } from 'framer-motion';
import { H1 } from 'components/Common/Typography/Typography';

const RedirectingView = () => {
  return (
    <MotionConfig reducedMotion="user">
      <LoadingContainer>
        <H1>CloudStack</H1>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </LoadingContainer>
    </MotionConfig>
  );
};

const LoadingContainer = styled.div`
  ${({ theme }) => `
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 150px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.grey[900]};
    color: ${theme.palette.grey[100]};
    & div {
      background-color: ${theme.palette.grey[100]};
      border-radius: 30px;
      width: 150px;
      height: 150px;
    }
  `};
`;

export default RedirectingView;

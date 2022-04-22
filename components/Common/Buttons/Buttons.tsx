import React, { ComponentProps } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

export const MuiPrimaryButton = styled(
  ({ ...rest }: ComponentProps<typeof Button>) => (
    <Button
      disableElevation
      variant="contained"
      color="primary"
      size="medium"
      {...rest}
    />
  )
)`
  ${({ theme }) => {
    return `
    background-color: ${theme.palette.primary.main};
    color:${theme.palette.common.white};
    border-radius: ${theme.shape.borderRadius};
    border: 1px solid ${theme.palette.primary.main};
    padding: ${theme.spacing(1.375)} ${theme.spacing(3)};
    line-height: 24px;
    ${theme.breakpoints.up('md')}{
      padding: ${theme.spacing(1.625)} ${theme.spacing(3)};
    }
    &:hover {
      background-color: ${theme.palette.grey[400]};
    }
    &:disabled{
      background-color: ${theme.palette.grey[100]};
      color:${theme.palette.grey[300]};
      border-color:  ${theme.palette.grey[100]};
      path{
        fill:${theme.palette.grey[300]};
      }
    }
  `;
  }}
`;

export const MuiSecondaryButton = styled(({ ...rest }) => (
  <Button
    disableElevation
    variant="outlined"
    color="primary"
    size="medium"
    {...rest}
  />
))`
  ${({ theme }) => {
    return `
    background-color: ${theme.palette.common.white};
    color:${theme.palette.common.black};
    border-radius: ${theme.shape.borderRadius};
    padding: ${theme.spacing(1.375)} ${theme.spacing(3)};
  
    border:1px solid;
    line-height: 24px;
    font-size: 0.75rem;
    font-weight: 700;
    ${theme.breakpoints.up('sm')}{
      font-size: 0.8125rem;
    }
    ${theme.breakpoints.up('md')}{
      font-size: 0.9375rem;
      padding: ${theme.spacing(1.625)} ${theme.spacing(3)};
    },  
    path{
      fill:${theme.palette.common.white};
    }
    &:hover {
      background-color: ${theme.palette.accent.offWhite};
      color:${theme.palette.accent.offBlack};
      border-color: ${theme.palette.accent.offBlack};
    }
    &:disabled{
      color:${theme.palette.grey[200]};
      border-color:${theme.palette.grey[200]};
      }
  `;
  }}
`;

export const MuiActionButton = styled(IconButton)`
  ${({ theme }) => `
    background-color: ${theme.palette.common.white};
    width: 32px;
    height: 32px;
    padding:0;
    ${theme.breakpoints.up('sm')}{
      width: 36px;
      height: 36px;
    }
    path{
      fill: ${theme.palette.grey[300]};
    }
  `}
`;

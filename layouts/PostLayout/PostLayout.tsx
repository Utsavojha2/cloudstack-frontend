import React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  MuiPrimaryButton,
  MuiSecondaryButton,
} from 'components/Common/Buttons/Buttons';
import { H2 } from 'components/Common/Typography/Typography';
import { IPostLayoutProps } from 'types/feed';
import { FieldValues, useFormContext } from 'react-hook-form';

const PostLayout: React.FC<IPostLayoutProps> = ({
  handleClose,
  isEditMode = false,
}) => {
  const { handleSubmit } = useFormContext();

  const onPublishPost = (formValues: FieldValues) => {
    console.log(formValues);
    if (isEditMode) {
      // update post
    }
    // create post
  };

  const onSaveAndExit = (formValues: FieldValues) => {
    if (isEditMode) {
      // update draft post
    }
    // create a draft post
    console.log(formValues);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <StyledIconButton>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <ArrowBackIcon />
          </IconButton>
        </StyledIconButton>
        <H2 sx={{ flex: '1', ml: { xs: 1, sm: 5 }, color: '#000' }}>
          {isEditMode ? 'Update Post' : 'Create Post'}
        </H2>
        <ActionButtons>
          <MuiSecondaryButton onClick={handleClose}>Cancel</MuiSecondaryButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: '0 15px', borderColor: 'gray' }}
          />
          <MuiSecondaryButton onClick={handleSubmit(onSaveAndExit)}>
            Save & Exit
          </MuiSecondaryButton>
          <MuiPrimaryButton onClick={handleSubmit(onPublishPost)}>
            Publish
          </MuiPrimaryButton>
        </ActionButtons>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => `
    position: relative;
    background-color: ${theme.palette.grey[100]};
  `};
`;

const StyledIconButton = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 0 14px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.55);
  clip-path: inset(0px -6px 0px 0px);
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  & button {
    padding: 5px 15px !important;
  }

  & button:first-child {
    ${({ theme }) => `
      ${theme.breakpoints.down('md')} {
        display: none
      }
    `};
  }
`;

export default PostLayout;

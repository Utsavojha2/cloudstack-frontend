import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  StyledDetailWrapper,
  StyledCoverImage,
  StyledFormHeader,
  StyledDPWrapper,
  StyledFormButtons,
  StyledUserName,
  StyledNameWrapper,
  StyledFormWrapper,
  StyledFormItemsWrapper,
  StyledDivider,
  StyledInputForm,
  StyledPhotoDropzone,
  StyledUploadWrapper,
  StyledMuiTextArea,
} from 'containers/Profile/ProfileDetails/styles';
import { H2, H3, P1 } from 'components/Common/Typography/Typography';
import * as Button from 'components/Common/Buttons/Buttons';
import SelectForm from 'components/Form/SelectForm/SelectForm';
import { countries, getFlagUri } from 'utils/static';

const ProfileDetails = () => {
  const methods = useForm();

  return (
    <StyledDetailWrapper {...methods}>
      <StyledCoverImage>
        <img src="/cover.jpg" alt="" />
        <button>
          <DriveFolderUploadIcon />
          Upload
        </button>
      </StyledCoverImage>
      <StyledFormHeader>
        <StyledUserName>
          <StyledDPWrapper>
            <img src={'/dp.jpeg'} alt="" />
          </StyledDPWrapper>
          <StyledNameWrapper>
            <H2>Utsav Ojha</H2>
            <P1>utsav@outside.tech</P1>
          </StyledNameWrapper>
        </StyledUserName>
        <StyledFormButtons>
          <Button.MuiSecondaryButton>Cancel</Button.MuiSecondaryButton>
          <Button.MuiPrimaryButton>Save</Button.MuiPrimaryButton>
        </StyledFormButtons>
      </StyledFormHeader>
      <StyledFormWrapper>
        <StyledFormItemsWrapper>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <StyledInputForm name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <StyledInputForm name="lastName" label="Last Name" />
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container>
            <Grid item xs={9}>
              <StyledInputForm name="emailAddress" label="Email Address" />
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Box sx={{ display: 'grid', placeItems: 'center' }}>
                <StyledDPWrapper isPreview>
                  <img src={'/dp.jpeg'} alt="" />
                </StyledDPWrapper>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <StyledPhotoDropzone>
                <StyledUploadWrapper>
                  <CloudUploadIcon />
                  <P1>
                    <strong>Click to upload</strong> or drag and drop
                    <br />
                    PNG, JPG, JPEG or GIF
                  </P1>
                </StyledUploadWrapper>
              </StyledPhotoDropzone>
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container>
            <Grid item xs={9}>
              <StyledInputForm name="role" label="Role" />
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container>
            <Grid item xs={9}>
              <SelectForm
                name="country"
                label="Country"
                selectOptions={countries}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={getFlagUri(option.code).src}
                      srcSet={getFlagUri(option.code).srcSet}
                      alt=""
                    />
                    {option.label} ({option.code})
                  </Box>
                )}
              />
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container>
            <H3 sx={{ mb: 1 }}>Bio</H3>
            <Grid item xs={12}>
              <StyledMuiTextArea
                minRows={10}
                maxRows={10}
                placeholder="What's on your mind?"
              />
            </Grid>
          </Grid>
        </StyledFormItemsWrapper>
      </StyledFormWrapper>
    </StyledDetailWrapper>
  );
};

export default ProfileDetails;

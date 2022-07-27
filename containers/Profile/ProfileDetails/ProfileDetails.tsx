import React, { useState, useRef, DragEvent, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { H2, H3, P1 } from 'components/Common/Typography/Typography';
import * as Button from 'components/Common/Buttons/Buttons';
import SelectForm from 'components/Form/SelectForm/SelectForm';
import ConfirmationModal from 'components/Common/ConfirmationModal/ConfirmationModal';
import CustomModal from 'components/Common/CustomModal/CustomModal';
import InputForm from 'components/Form/InputForm/InputForm';
import DatePicker from 'components/Form/DatePicker/DatePicker';
import { countries, getFlagUri } from 'utils/static';
import useAppContext from 'config/app.context';
import { isImageExtensionEligible } from 'utils';
import { CropContext } from 'containers/Provider/CropProvider/CropProvider';
import { ICropContext } from 'containers/Provider/CropProvider/types';
import { ToastContext } from 'config/toast.context';
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
  StyledPhotoDropzone,
  StyledUploadWrapper,
  StyledMuiTextArea,
} from 'containers/Profile/ProfileDetails/styles';
import PictureResize from '../PictureResize/PictureResize';
import { IModalType, IDateType } from './types';

const ProfileDetails = () => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const methods = useForm();
  const { fields, remove, append } = useFieldArray({
    control: methods.control,
    name: 'employment-history',
  });

  const [currentWorkingIndex, setCurrentWorkingIndex] = useState<number | null>(
    null
  );
  const [imageSrc, setImageSrc] = useState('');
  const [currentOpenedModal, setCurrentOpenedModal] =
    useState<IModalType | null>(null);

  const { showMessage } = useAppContext(ToastContext);
  const { resetInitialCrop, completeCrop } = useAppContext(
    CropContext
  ) as ICropContext;

  console.log(completeCrop);

  useEffect(() => {
    const subscription = methods.watch((data) => {
      setCurrentWorkingIndex(null);
      const jobHistory = data['employment-history'];
      const index = jobHistory.findIndex(
        (job: { isCurrentlyWorkingHere: boolean }) =>
          !!job.isCurrentlyWorkingHere
      );
      if (index !== -1) {
        setCurrentWorkingIndex(index);
      }
    });

    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const readFileUri = (
    file: File,
    modalType: IModalType = IModalType.PROFILE_RESIZE_MODAL
  ) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const src = reader.result?.toString();
      if (src) {
        setImageSrc(src);
        setCurrentOpenedModal(modalType);
      }
    });
    reader.readAsDataURL(file);
  };

  const onSelectFile =
    (type: IModalType = IModalType.PROFILE_RESIZE_MODAL) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        methods.resetField('imageScale');
        resetInitialCrop();
        readFileUri(e.target.files[0], type);
      }
    };

  const onUploadClick = () => fileInputRef.current?.click();

  const onDragInitial = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropzoneRef.current?.classList.add('highlight');
  };

  const onDragEnd = () => {
    dropzoneRef.current?.classList.remove('highlight');
  };

  const onDropPicture = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropzoneRef.current?.classList.remove('highlight');
    const files = e.dataTransfer.files;
    const uploadedFile = e.dataTransfer.files[0];
    const isValidImageExtension = isImageExtensionEligible(uploadedFile?.name);
    if (!files || !uploadedFile || files.length > 1) {
      return showMessage('Error adding file', 'error');
    }
    if (!isValidImageExtension) {
      return showMessage('Invalid image extension', 'error');
    }
    resetInitialCrop();
    readFileUri(uploadedFile);
  };

  const onShowConfirmationModal = (type: IModalType) => () => {
    setCurrentOpenedModal(type);
  };

  const onExitDetailPage = () => null;

  const onAddEmploymentField = () => {
    append({ name: 'employment-history' });
  };

  const handleClose =
    (i: number, type: IDateType = IDateType.END_DATE) =>
    () => {
      methods.resetField(`employment-history.${i}.${type}`);
    };

  const isDisabled = (idx: number, equalityComparison: boolean) => {
    const isIndexEqual = idx === currentWorkingIndex;
    return !isNil(currentWorkingIndex) && isIndexEqual === equalityComparison;
  };

  const onModalClose = () => {
    setCurrentOpenedModal(null);
  };

  return (
    <StyledDetailWrapper {...methods}>
      <ConfirmationModal
        isOpen={isEqual(currentOpenedModal, IModalType.FORM_EXIT_MODAL)}
        handleClose={onModalClose}
        title="Are you sure?"
        contentMessage="You will lose all your current changes. That means all the form changes & uploaded pictures will be lost and will revert back to previous changes."
        confirmText="Exit without saving"
        onConfirm={onExitDetailPage}
      />
      <CustomModal
        open={isEqual(currentOpenedModal, IModalType.PROFILE_RESIZE_MODAL)}
        onClose={onModalClose}
      >
        <PictureResize
          imageSrc={imageSrc}
          circularCrop
          keepSelection
          minWidth={200}
          minHeight={200}
          aspect={1}
          locked
        />
      </CustomModal>
      <CustomModal
        open={isEqual(currentOpenedModal, IModalType.COVER_RESIZE_MODAL)}
        onClose={onModalClose}
      >
        <PictureResize
          imageSrc={imageSrc}
          // keepSelection
          locked
          aspect={16 / 9}
        />
      </CustomModal>
      <StyledCoverImage>
        <img src="/logo.png" alt="" />
        <button onClick={() => coverInputRef.current?.click()}>
          <DriveFolderUploadIcon />
          Upload
        </button>
        <input
          ref={coverInputRef}
          type="file"
          multiple={false}
          hidden
          accept="image/x-png,image/gif,image/jpeg"
          onClick={(e) => {
            const element = e.target as HTMLInputElement;
            element.value = '';
          }}
          onChange={onSelectFile(IModalType.COVER_RESIZE_MODAL)}
        />
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
          <Button.MuiSecondaryButton
            onClick={onShowConfirmationModal(IModalType.FORM_EXIT_MODAL)}
          >
            Exit
          </Button.MuiSecondaryButton>
          <Button.MuiPrimaryButton>Save Changes</Button.MuiPrimaryButton>
        </StyledFormButtons>
      </StyledFormHeader>
      <StyledFormWrapper>
        <StyledFormItemsWrapper>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <InputForm name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <InputForm name="lastName" label="Last Name" />
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container>
            <Grid item xs={9}>
              <InputForm name="emailAddress" label="Email Address" />
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
              <StyledPhotoDropzone
                ref={dropzoneRef}
                onClick={onUploadClick}
                onDragEnter={onDragInitial}
                onDragOver={onDragInitial}
                onDragLeave={onDragEnd}
                onDrop={onDropPicture}
              >
                <StyledUploadWrapper>
                  <CloudUploadIcon />
                  <P1>
                    <strong>Click to upload</strong> or drag and drop
                    <br />
                    PNG, JPG, JPEG or GIF
                  </P1>
                </StyledUploadWrapper>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple={false}
                  hidden
                  accept="image/x-png,image/gif,image/jpeg"
                  onClick={(e) => {
                    const element = e.target as HTMLInputElement;
                    element.value = '';
                  }}
                  onChange={onSelectFile(IModalType.PROFILE_RESIZE_MODAL)}
                />
              </StyledPhotoDropzone>
            </Grid>
          </Grid>
          <StyledDivider />
          <Grid container>
            <Grid item xs={9}>
              <InputForm name="role" label="Role" />
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
          <StyledDivider />
          {fields.map((item, index) => {
            return (
              <Grid key={item.id} container spacing={3}>
                <Grid item xs={6}>
                  <InputForm
                    name={`employment-history.${index}.jobTitle`}
                    label="Job Title"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputForm
                    name={`employment-history.${index}.company`}
                    label="Company"
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="Start Date"
                    name={`employment-history.${index}.startDate`}
                    disableFuture
                    onYearChange={handleClose(index, IDateType.START_DATE)}
                    onMonthChange={handleClose(index, IDateType.START_DATE)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="End Date"
                    name={`employment-history.${index}.endDate`}
                    disableFuture
                    onYearChange={handleClose(index)}
                    onMonthChange={handleClose(index)}
                    disabled={isDisabled(index, true)}
                    className={
                      isDisabled(index, true) ? 'disabled-date-picker' : ''
                    }
                  />
                </Grid>
                {!isDisabled(index, false) && (
                  <Grid item xs={12} sx={{ pt: '10px !important' }}>
                    <Controller
                      render={({ field }) => (
                        <FormControlLabel
                          label="I currently work here"
                          control={<Checkbox color="default" />}
                          {...field}
                        />
                      )}
                      control={methods.control}
                      name={`employment-history.${index}.isCurrentlyWorkingHere`}
                    />
                  </Grid>
                )}
                <Grid item xs={10}>
                  <Button.MuiSecondaryButton onClick={() => remove(index)}>
                    Remove
                  </Button.MuiSecondaryButton>
                </Grid>

                <Grid item xs={12}>
                  <StyledDivider isFieldDivider />
                </Grid>
              </Grid>
            );
          })}
          <Button.MuiPrimaryButton
            onClick={onAddEmploymentField}
            disabled={fields.length > 5}
          >
            <AddCircleOutlineIcon sx={{ mr: 1 }} /> Add Employment History
          </Button.MuiPrimaryButton>
        </StyledFormItemsWrapper>
      </StyledFormWrapper>
    </StyledDetailWrapper>
  );
};

export default ProfileDetails;

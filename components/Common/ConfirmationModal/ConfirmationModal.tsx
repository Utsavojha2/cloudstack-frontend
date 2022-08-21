import React, { ButtonHTMLAttributes } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Button from 'components/Common/Buttons/Buttons';
import MuiTransition from 'components/Common/MuiTransition/MuiTransition';

interface IModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary';
}

interface IAlertDialogProps {
  isOpen: boolean;
  title: string;
  contentMessage: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonProps?: IModalButtonProps;
  cancelButtonProps?: IModalButtonProps;
  handleClose: () => void;
  onConfirm: () => void;
  onCancel?: () => void;
}

export default function AlertDialogSlide({
  isOpen,
  title,
  contentMessage,
  handleClose,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmButtonProps = {},
  cancelButtonProps = {},
  onConfirm,
  onCancel,
}: IAlertDialogProps) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={MuiTransition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-confirmation"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {contentMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box sx={{ pb: 1, pr: 4 }}>
          <Button.MuiSecondaryButton
            onClick={onCancel || handleClose}
            sx={{ mr: 2 }}
            {...cancelButtonProps}
          >
            {cancelText}
          </Button.MuiSecondaryButton>
          <Button.MuiPrimaryButton onClick={onConfirm} {...confirmButtonProps}>
            {confirmText}
          </Button.MuiPrimaryButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MuiTransition from 'components/Common/MuiTransition/MuiTransition';

interface IAlertDialogProps {
  isOpen: boolean;
  title: string;
  contentMessage: string;
  renderDialogActions: () => JSX.Element;
  handleClose: () => void;
}

export default function AlertDialogSlide({
  isOpen,
  title,
  contentMessage,
  renderDialogActions,
  handleClose,
}: IAlertDialogProps) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={MuiTransition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {contentMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{renderDialogActions()}</DialogActions>
    </Dialog>
  );
}

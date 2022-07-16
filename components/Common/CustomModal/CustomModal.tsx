import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import MuiTransition from 'components/Common/MuiTransition/MuiTransition';

// interface ICustomModalProps extends DialogProps {
//   isOpen: boolean;
//   handleClose: () => void;
// }

const CustomModal = ({
  children,
  ...props
}: React.PropsWithChildren<DialogProps>) => {
  return (
    <Dialog
      {...props}
      TransitionComponent={MuiTransition}
      keepMounted
      aria-describedby="alert-dialog-custom-modal"
    >
      {children}
    </Dialog>
  );
};

export default CustomModal;

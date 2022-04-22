import React from 'react';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface ToastbarProps extends SnackbarProps {
  onClose: () => void;
  toastMessage: string;
  severity?: 'success' | 'error' | 'info' | 'warning';
}

const Alert: React.FC<AlertProps> = React.forwardRef<
  HTMLDivElement,
  AlertProps
>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MuiSnackbar: React.FC<ToastbarProps> = ({
  onClose,
  toastMessage,
  severity = 'success',
  ...props
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={onClose}
      key={toastMessage}
      autoHideDuration={3000}
      {...props}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {toastMessage}
      </Alert>
    </Snackbar>
  );
};

export default MuiSnackbar;

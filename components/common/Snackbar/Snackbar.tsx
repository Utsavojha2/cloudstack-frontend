import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

interface SnackbarProps {
  vertical?: 'top' | 'bottom'
  horizontal?: 'left' | 'right' | 'center'
  open: boolean
  onClose: () => void
  toastMesssage: string
  severity?: 'success' | 'error' | 'info' | 'warning'
}

const Alert: React.FC<AlertProps> = React.forwardRef<
  HTMLDivElement,
  AlertProps
>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const MuiSnackbar: React.FC<SnackbarProps> = ({
  vertical = 'top',
  horizontal = 'center',
  open,
  onClose,
  toastMesssage,
  severity = 'success',
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={onClose}
      key={vertical + horizontal}
      autoHideDuration={3000}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {toastMesssage}
      </Alert>
    </Snackbar>
  )
}

export default MuiSnackbar

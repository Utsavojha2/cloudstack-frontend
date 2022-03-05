import * as React from 'react'
import Button from '@mui/material/Button'

interface MuiButtonProps {
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
}

export const ButtonOutlined: React.FC<MuiButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'secondary',
  disabled = false,
  startIcon,
  endIcon,
}) => (
  <Button
    variant={variant}
    size={size}
    color={color}
    disabled={disabled}
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {children}
  </Button>
)

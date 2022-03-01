import React from 'react'
import Typography from '@mui/material/Typography'

interface MuiTypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
  children: React.ReactNode
  display: 'inline' | 'block'
}

const MuiTextTypography: React.FC<MuiTypographyProps> = ({
  variant = 'subtitle1',
  children,
  display = 'block',
}) => {
  return (
    <Typography
      variant={variant}
      component="div"
      display={display}
      gutterBottom
    >
      {children}
    </Typography>
  )
}

export default MuiTextTypography

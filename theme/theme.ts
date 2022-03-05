import { createTheme } from '@mui/material/styles'
import { palette } from 'theme/palette'

const theme = createTheme({ palette })

theme.typography.h1 = {
  fontSize: '1.75rem',
  lineHeight: '110%',
  fontWeight: 700,
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.25rem',
  },
}
theme.typography.h2 = {
  lineHeight: '110%',
  fontWeight: 700,
  fontSize: '1.25rem',
  letterSpacing: '-0.005em',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.375rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  },
}
theme.typography.h3 = {
  lineHeight: '130%',
  fontSize: '1rem',
  fontWeight: 700,
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.0625rem',
  },
}
theme.typography.h4 = {
  lineHeight: '130%',
  fontSize: '0.8125rem',
  fontWeight: 700,

  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9375rem',
  },
}
theme.typography.p1 = {
  lineHeight: '130%',
  fontSize: '1rem',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.0625rem',
  },
}
theme.typography.p2 = {
  lineHeight: '130%',
  fontSize: '0.8125rem',
  fontWeight: 400,

  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9375rem',
  },
}
theme.typography.p3 = {
  lineHeight: '130%',
  fontSize: '0.625rem',
  fontWeight: 400,
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.8125rem',
  },
}
theme.typography.p4 = {
  fontSize: '0.5rem',
  lineHeight: '130%',
  fontWeight: 400,
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.625rem',
  },
}
theme.typography.button = {
  lineHeight: 1.334,
  fontSize: '0.9375rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.0625rem',
  },
}
theme.typography.button2 = {
  lineHeight: 1.334,
  fontSize: '0.75rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8125rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9375rem',
  },
}

export default theme

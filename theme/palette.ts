import { alpha, ThemeOptions } from '@mui/material'
import { common } from '@mui/material/colors'

const GREY = {
  0: '#FFFFFF',
  100: '#E6E4E3',
  200: '#C6C4C3',
  300: '#A0A0A0',
  400: '#282828',
  500: '#676767',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
}

const PRIMARY = {
  main: '#010101',
  contrastText: '#fff',
}
const SECONDARY = {
  main: '#676767',
  contrastText: '#fff',
}

const COMMON = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  grey: GREY,
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

export const palette: NonNullable<ThemeOptions['palette']> = {
  ...COMMON,
  text: { primary: common.black, secondary: GREY[500], disabled: GREY[500] },
  background: { paper: '#FFFDFC', default: '#FFFDFC' },
}

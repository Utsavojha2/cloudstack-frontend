import { CSSProperties } from 'react';
import { Theme } from '@mui/material/styles';
import 'styled-components';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: CSSProperties;
    p2: CSSProperties;
    p3: CSSProperties;
    p4: CSSProperties;
    button2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    p1?: CSSProperties;
    p2?: CSSProperties;
    p3?: CSSProperties;
    p4?: CSSProperties;
    button2?: CSSProperties;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
  }
}

declare module 'styled-components' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    p4: true;
    button2: true;
    h3: true;
  }
}

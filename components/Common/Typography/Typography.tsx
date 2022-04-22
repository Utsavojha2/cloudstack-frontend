import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type IExtraProps = {
  component?: React.ElementType;
};

export const TypographyBold = styled(({ ...rest }) => (
  <Typography {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;

export const H1 = styled(({ ...rest }) => (
  <Typography variant="h1" {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;
export const H2 = styled(({ ...rest }) => (
  <Typography variant="h2" {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;
export const H3 = styled(({ ...rest }) => (
  <Typography variant="h3" {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;
export const H4 = styled(({ ...rest }) => (
  <Typography variant="h4" {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;
export const P1 = styled(({ ...rest }) => (
  <Typography variant="p1" {...rest} />
))<IExtraProps>`
  font-weight: 400;
`;
export const P2 = styled(({ ...rest }) => (
  <Typography variant="p2" {...rest} />
))<IExtraProps>`
  font-weight: 400;
`;
export const P3 = styled(({ ...rest }) => (
  <Typography variant="p3" {...rest} />
))<IExtraProps>`
  font-weight: 400;
`;
export const P4 = styled(({ ...rest }) => (
  <Typography variant="p4" {...rest} />
))<IExtraProps>`
  font-weight: 400;
`;
export const B1 = styled(({ ...rest }) => (
  <Typography variant="button" {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;

export const B2 = styled((rest) => (
  <Typography variant="button2" {...rest} />
))<IExtraProps>`
  font-weight: 700;
`;

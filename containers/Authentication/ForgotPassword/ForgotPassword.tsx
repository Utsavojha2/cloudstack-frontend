import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, SchemaOf } from 'yup';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { H1, H3 } from 'components/Common/Typography/Typography';
import InputForm from 'components/Form/InputForm/InputForm';
import { MuiPrimaryButton } from 'components/Common/Buttons/Buttons';
import { isRequiredValidation } from 'utils';

type ForgotPasswordSchema = { email: string };

const Login = () => {
  const { t: translateText } = useTranslation();

  const forgotPasswordValidationSchema: SchemaOf<ForgotPasswordSchema> =
    object().shape({
      email: string()
        .required(isRequiredValidation('email'))
        .email(translateText('invalidEmail')),
    });

  const methods = useForm<ForgotPasswordSchema>({
    mode: 'onChange',
    resolver: yupResolver(forgotPasswordValidationSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  });

  const onUserLogin = (data: ForgotPasswordSchema) => {
    console.log(data);
  };

  return (
    <CardContent>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <H1>CloudStack</H1>
      <H3 sx={{ mt: 2 }}>{translateText('letsConnect')}</H3>
      <Box sx={{ mt: 2 }}>
        <FormProvider {...methods}>
          <LoginForm onSubmit={methods.handleSubmit(onUserLogin)}>
            <InputForm label={translateText('email')} name="email" />
            <MuiPrimaryButton type="submit">
              <LoginOutlinedIcon sx={{ mr: 1 }} />
              {translateText('resetPassword')}
            </MuiPrimaryButton>
          </LoginForm>
        </FormProvider>
      </Box>
      <CardActions>
        <CreateAccountText>
          {translateText('createAccHelperText')}
          <Link href="/signup">
            <a>{translateText('createAccBtnText')}</a>
          </Link>
        </CreateAccountText>
      </CardActions>
    </CardContent>
  );
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
`;

const CreateAccountText = styled(H3)`
  ${({ theme }) => `
    text-align: center;
    width: 100%;
    margin-top: 8px;
    & a {
      font-size: inherit;
      cursor: pointer;
      margin-left: 5px;
      color: ${theme.palette.action.active};
      &:hover {
      text-decoration: underline;
      }
      ${theme.breakpoints.down('sm')} {
          display: block;
      }
    }
  `}
`;

export default Login;

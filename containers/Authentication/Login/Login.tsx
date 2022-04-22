import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { string, object, SchemaOf } from 'yup';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { yupResolver } from '@hookform/resolvers/yup';

import setupInterceptors from 'config/interceptor';
import useTokenContext from 'config/token.context';
import { H1, H3 } from 'components/Common/Typography/Typography';
import InputForm from 'components/Form/InputForm/InputForm';
import { MuiPrimaryButton } from 'components/Common/Buttons/Buttons';
import { LoginAuth, TokenPayload } from 'types/auth';
import { isRequiredValidation } from 'utils';

const Login = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setToken } = useTokenContext();
  const { t: translateText } = useTranslation();

  const loginValidationSchema: SchemaOf<LoginAuth> = object().shape({
    email: string()
      .required(isRequiredValidation('email'))
      .email(translateText('invalidEmail')),
    password: string()
      .required(isRequiredValidation('password'))
      .min(6, translateText('minPasswordLengthError'))
      .max(40, translateText('maxPasswordLengthError')),
  });

  const methods = useForm<LoginAuth>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  });

  const onLoginRequest = (loginPayload: LoginAuth) => {
    return axios.post<Required<TokenPayload>>('/v1/api/login', loginPayload);
  };

  const { mutate } = useMutation(onLoginRequest, {
    onSuccess: (response) => {
      setToken(response.data?.accessToken);
      setupInterceptors(axios, response.data?.accessToken);
      queryClient.invalidateQueries('/current-user');
      if (!response.data?.is_verified) {
        router.push('/auth/verify');
        return;
      }
      // route to feed
    },
  });
  const onUserLogin = (data: LoginAuth) => mutate(data);

  return (
    <CardContent>
      <Head>
        <title>Login</title>
      </Head>
      <H1>CloudStack</H1>
      <H3 sx={{ mt: 2 }}>{translateText('letsConnect')}</H3>
      <Box sx={{ mt: 2 }}>
        <FormProvider {...methods}>
          <LoginForm onSubmit={methods.handleSubmit(onUserLogin)}>
            <InputForm label={translateText('email')} name="email" />
            <InputForm label={translateText('password')} name="password" />
            <MuiPrimaryButton type="submit">
              <LoginOutlinedIcon sx={{ mr: 1 }} />
              {translateText('login')}
            </MuiPrimaryButton>
          </LoginForm>
        </FormProvider>
      </Box>
      <CardActions>
        <CardFooterText>
          {translateText('createAccHelperText')}
          <Link href="/auth/signup">
            <a>{translateText('createAccBtnText')}</a>
          </Link>
        </CardFooterText>
      </CardActions>
      <CardActions>
        <CardFooterText>
          <Link href="/auth/forgot-password">
            <a>{translateText('forgotPassword')}?</a>
          </Link>
        </CardFooterText>
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

const CardFooterText = styled(H3)`
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

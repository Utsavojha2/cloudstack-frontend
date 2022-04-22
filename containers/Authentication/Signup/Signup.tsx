import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, SchemaOf, date, ref } from 'yup';
import { CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { H1, H3 } from 'components/Common/Typography/Typography';
import InputForm from 'components/Form/InputForm/InputForm';
import { MuiPrimaryButton } from 'components/Common/Buttons/Buttons';
import DatePicker from 'components/Form/DatePicker/DatePicker';
import { RegisterAuth } from 'types/auth';
import { differenceInYears, isDate } from 'date-fns';
import { parseDateString } from 'utils';
import { isRequiredValidation } from 'utils';
import Head from 'next/head';

const Login = () => {
  const { t: translateText } = useTranslation();

  const registerValidationSchema: SchemaOf<RegisterAuth> = object().shape({
    fullName: string()
      .required(isRequiredValidation('fullName'))
      .max(20, translateText('maxNameLengthError')),
    email: string()
      .required(isRequiredValidation('email'))
      .email(translateText('invalidEmail')),
    password: string()
      .required(isRequiredValidation('password'))
      .min(6, translateText('minPasswordLengthError'))
      .max(40, translateText('maxPasswordLengthError')),
    confirmPassword: string()
      .required(translateText('confirmPasswordValidation'))
      .oneOf([ref('password'), null], translateText('passwordNotMatched')),
    birthDate: date()
      .required(isRequiredValidation('birthDate'))
      .transform(parseDateString)
      .max(new Date(), translateText('invalidDob'))
      .test('birthDate', translateText('ageLimit'), (birthDate) => {
        if (!birthDate || !isDate(birthDate)) return false;
        const todaysDate = new Date();
        return differenceInYears(todaysDate, birthDate as Date) >= 16;
      }),
  });

  const methods = useForm<RegisterAuth>({
    mode: 'onChange',
    resolver: yupResolver(registerValidationSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  });

  const onUserRegistration = (data: RegisterAuth) => {
    console.log(data);
  };

  return (
    <CardContent>
      <Head>
        <title>Sign Up</title>
      </Head>
      <H1>CloudStack</H1>
      <H3 sx={{ mt: 2 }}>{translateText('letsConnect')}</H3>
      <Box sx={{ mt: 2 }}>
        <FormProvider {...methods}>
          <LoginForm onSubmit={methods.handleSubmit(onUserRegistration)}>
            <InputForm label={translateText('fullName')} name="fullName" />
            <InputForm label={translateText('email')} name="email" />
            <InputForm
              label={translateText('password')}
              name="password"
              type="password"
            />
            <InputForm
              label={translateText('confirmPassword')}
              name="confirmPassword"
              type="password"
            />
            <DatePicker label={translateText('birthDate')} name="birthDate" />
            <MuiPrimaryButton type="submit">
              <LoginOutlinedIcon sx={{ mr: 1 }} />
              {translateText('registerAccount')}
            </MuiPrimaryButton>
          </LoginForm>
        </FormProvider>
      </Box>
      <CardActions>
        <CreateAccountText>
          {translateText('accountAlreadyExists')}
          <Link href="/login">
            <a>{translateText('login').toUpperCase()}</a>
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

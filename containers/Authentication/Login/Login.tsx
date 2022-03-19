import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useForm, FormProvider } from 'react-hook-form'
import { string, object, SchemaOf } from 'yup'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { CardActions, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import { yupResolver } from '@hookform/resolvers/yup'

import { H1, H3 } from 'components/common/Typography/Typography'
import InputForm from 'components/form/InputForm/InputForm'
import { MuiPrimaryButton } from 'components/common/Buttons/Buttons'
import { LoginAuth } from 'types/auth'
import { isRequiredValidation } from 'utils'

const Login = () => {
  const { t: translateText } = useTranslation()

  const loginValidationSchema: SchemaOf<LoginAuth> = object().shape({
    email: string()
      .required(isRequiredValidation('email'))
      .email(translateText('invalidEmail')),
    password: string()
      .required(isRequiredValidation('password'))
      .min(6, translateText('minPasswordLengthError'))
      .max(10, translateText('maxPasswordLengthError')),
  })

  const methods = useForm<LoginAuth>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const onUserLogin = (data: LoginAuth) => {
    console.log(data)
  }

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
          <Link href="/signup">
            <a>{translateText('createAccBtnText')}</a>
          </Link>
        </CardFooterText>
      </CardActions>
      <CardActions>
        <CardFooterText>
          <Link href="/forgot-password">
            <a>{translateText('forgotPassword')}?</a>
          </Link>
        </CardFooterText>
      </CardActions>
    </CardContent>
  )
}

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
`

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
`

export default Login

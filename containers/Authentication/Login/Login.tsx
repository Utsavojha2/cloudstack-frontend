import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { CardActions, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, object, SchemaOf } from 'yup'
import { H1, H3 } from 'components/common/Typography/Typography'
import InputForm from 'components/form/InputForm/InputForm'
import { MuiPrimaryButton } from 'components/common/Buttons/Buttons'
import { LoginAuth } from 'types/auth'
import Link from 'next/link'

const loginValidationSchema: SchemaOf<LoginAuth> = object().shape({
  email: string().required('Email is required').email('Email is invalid'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
})

const Login = () => {
  const { t: translateText } = useTranslation()
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
      <H1>CloudStack</H1>
      <H3 sx={{ mt: 2 }}>{translateText('letsConnect')}</H3>
      <Box sx={{ mt: 2 }}>
        <FormProvider {...methods}>
          <LoginForm onSubmit={methods.handleSubmit(onUserLogin)}>
            <InputForm label="Email" name="email" />
            <InputForm label="Password" name="password" />
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

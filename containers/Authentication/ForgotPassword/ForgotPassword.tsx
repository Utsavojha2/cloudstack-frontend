import React from 'react'
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
import Link from 'next/link'

type ForgotPasswordSchema = { email: string }

const forgotPasswordValidationSchema: SchemaOf<ForgotPasswordSchema> =
  object().shape({
    email: string().required('Email is required').email('Email is invalid'),
  })

const Login = () => {
  const methods = useForm<ForgotPasswordSchema>({
    mode: 'onChange',
    resolver: yupResolver(forgotPasswordValidationSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const onUserLogin = (data: ForgotPasswordSchema) => {
    console.log(data)
  }

  return (
    <CardContent>
      <H1>CloudStack</H1>
      <H3 sx={{ mt: 2 }}>Let&apos;s connect!</H3>
      <Box sx={{ mt: 2 }}>
        <FormProvider {...methods}>
          <LoginForm onSubmit={methods.handleSubmit(onUserLogin)}>
            <InputForm label="Email" name="email" />
            <MuiPrimaryButton type="submit">
              <LoginOutlinedIcon sx={{ mr: 1 }} />
              Reset Password
            </MuiPrimaryButton>
          </LoginForm>
        </FormProvider>
      </Box>
      <CardActions>
        <CreateAccountText>
          Don&apos;t have an account yet?
          <Link href="/signup">
            <a>CREATE HERE</a>
          </Link>
        </CreateAccountText>
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
`

export default Login

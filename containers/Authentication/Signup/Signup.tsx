import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, object, SchemaOf, date, ref } from 'yup'
import { CardActions, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import { H1, H3 } from 'components/common/Typography/Typography'
import InputForm from 'components/form/InputForm/InputForm'
import { MuiPrimaryButton } from 'components/common/Buttons/Buttons'
import DatePicker from 'components/form/DatePicker/DatePicker'
import { RegisterAuth } from 'types/auth'
import { differenceInYears, isDate } from 'date-fns'
import { parseDateString } from 'utils'

const registerValidationSchema: SchemaOf<RegisterAuth> = object().shape({
  fullName: string()
    .required('Fullname is required')
    .max(20, 'Name must not exceed 25 characters'),
  email: string().required('Email is required').email('Email is invalid'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: string()
    .required('Password confirmation is required')
    .oneOf([ref('password'), null], 'Confirm Password does not match'),
  birthDate: date()
    .required('Birthdate is required')
    .transform(parseDateString)
    .max(new Date(), 'Invalid birthdate')
    .test('birthDate', 'Must be at least 16 years old', (birthDate) => {
      if (!birthDate || !isDate(birthDate)) return false
      const todaysDate = new Date()
      return differenceInYears(todaysDate, birthDate as Date) >= 16
    }),
})

const Login = () => {
  const methods = useForm<RegisterAuth>({
    mode: 'onChange',
    resolver: yupResolver(registerValidationSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const onUserRegistration = (data: RegisterAuth) => {
    console.log(data)
  }

  return (
    <CardContent>
      <H1>CloudStack</H1>
      <H3 sx={{ mt: 2 }}>Let&apos;s connect!</H3>
      <Box sx={{ mt: 2 }}>
        <FormProvider {...methods}>
          <LoginForm onSubmit={methods.handleSubmit(onUserRegistration)}>
            <InputForm label="Fullname" name="fullName" />
            <InputForm label="Email" name="email" />
            <InputForm label="Password" name="password" type="password" />
            <InputForm
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <DatePicker label="Date of Birth" name="birthDate" />
            <MuiPrimaryButton type="submit">
              <LoginOutlinedIcon sx={{ mr: 1 }} />
              Register Account
            </MuiPrimaryButton>
          </LoginForm>
        </FormProvider>
      </Box>
      <CardActions>
        <CreateAccountText>
          Already have an account ?
          <Link href="/login">
            <a>LOGIN</a>
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

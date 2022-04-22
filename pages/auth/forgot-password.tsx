import React from 'react';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import ForgotPassword from 'containers/Authentication/ForgotPassword/ForgotPassword';

const SignIn = () => (
  <AuthLayout>
    <ForgotPassword />
  </AuthLayout>
);

export default SignIn;

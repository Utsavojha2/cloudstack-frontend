import React from 'react';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import Login from 'containers/Authentication/Login/Login';

const SignIn = () => <Login />;
SignIn.Layout = AuthLayout;
SignIn.isGuestPage = true;

export default SignIn;

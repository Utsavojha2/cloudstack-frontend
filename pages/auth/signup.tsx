import React from 'react';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import Register from 'containers/Authentication/Signup/Signup';

const Signup = () => <Register />;
Signup.isGuestPage = true;
Signup.Layout = AuthLayout;

export default Signup;

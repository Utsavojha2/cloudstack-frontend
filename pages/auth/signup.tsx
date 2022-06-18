import React from 'react';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import Register from 'containers/Authentication/Signup/Signup';

const Signup = () => <Register />;
Signup.Layout = AuthLayout;
Signup.isGuestPage = true;

export default Signup;

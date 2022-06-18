import React from 'react';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import ForgotPassword from 'containers/Authentication/ForgotPassword/ForgotPassword';

const ForgotPasswordPage = () => <ForgotPassword />;
ForgotPasswordPage.Layout = AuthLayout;
ForgotPasswordPage.isGuestPage = true;

export default ForgotPasswordPage;

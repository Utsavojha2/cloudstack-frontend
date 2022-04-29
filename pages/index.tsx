import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import Login from 'containers/Authentication/Login/Login';

const LoginContent = () => <Login />;
LoginContent.Layout = AuthLayout;
export default LoginContent;

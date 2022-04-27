import { mockNextUseRouter, render, screen, act } from 'tests/test-utils';
import userEvent from '@testing-library/user-event';
import { build } from '@jackfranklin/test-data-bot';
import faker from '@faker-js/faker';
import Login from './Login';

const buildLoginForm = build({
  fields: {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
});

beforeEach(() => {
  mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: '',
    asPath: '/',
  });
});

describe('Login component unit test', () => {
  it('should render the login', () => {
    render(<Login />);
    const loginText = screen.getByText(/Login/i);
    expect(loginText).toBeInTheDocument();
  });

  it('Should omit error when failing form validation', async () => {
    render(<Login />);
    const { email, password } = buildLoginForm();
    const submitBtnElement = screen.getByRole('button', { name: /login/i });

    const passwordValidation = /password is required/i;
    const emailValidation = /email is required/i;
    const minError = /password must be at least 6 characters/i;

    expect(screen.queryByText(passwordValidation)).not.toBeInTheDocument();
    expect(screen.queryByText(emailValidation)).not.toBeInTheDocument();
    expect(screen.queryByText(minError)).not.toBeInTheDocument();

    // Form submit button click
    await act(async () => await userEvent.click(submitBtnElement));

    expect(await screen.findByText(emailValidation)).toBeInTheDocument();
    expect(await screen.findByText(passwordValidation)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox', { name: /email/i }), email);
    userEvent.type(screen.getByLabelText(/password/i), password);

    await act(async () => await userEvent.click(submitBtnElement));

    expect(screen.queryByText(passwordValidation)).not.toBeInTheDocument();
    expect(screen.queryByText(emailValidation)).not.toBeInTheDocument();
  });
});

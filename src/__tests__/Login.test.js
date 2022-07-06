import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ShowALert } from '../App';
import Login from '../pages/Login';
import { store } from '../redux/store';

const LoginComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ShowALert />
      <Login />
    </Provider>
  </BrowserRouter>
);

describe('Login page render alert properly', () => {
  beforeEach(() => {
    fetch.resetMocks();
    render(<LoginComp />);
  });

  function mockFetchLoginAPI(email, password, isServerDown) {
    if (isServerDown) return fetch.mockReject(() => Promise.reject('505'));

    let mockResponse = {};
    const correctEmail = 'correct@mail.com';
    const correctPassword = '12345678';

    if (!email && !password) {
      mockResponse = {
        errors: [{ msg: 'email can`t be null' }, { msg: 'password can`t be null' }],
      };
    } else if (!email) {
      mockResponse = { errors: [{ msg: 'email can`t be null' }] };
    } else if (!password) {
      mockResponse = { errors: [{ msg: 'password can`t be null' }] };
    } else if (email !== correctEmail) {
      mockResponse = { status: 'Failed', msg: 'Wrong email or password' };
    } else if (password !== correctPassword) {
      mockResponse = { status: 'Failed', msg: 'Wrong email or password' };
      return;
    } else if (email === correctEmail && password === correctPassword) {
      mockResponse = { token: '123', msg: 'Login success' };
    }

    fetch.mockResponseOnce(JSON.stringify(mockResponse));
  }

  it('should render alert message "something went wrong"', async () => {
    const loginButton = screen.getByTestId('login-button');

    act(() => {
      mockFetchLoginAPI(undefined, undefined, true);

      userEvent.click(loginButton);
    });

    await waitFor(() => expect(screen.getByText('something went wrong')).toBeInTheDocument());
  });

  it('should render double alert message "email can`t be null" and "password can`t be null"', async () => {
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Password');
    const loginButton = screen.getByTestId('login-button');

    const emailType = '';
    const passwordType = '';

    act(() => {
      userEvent.type(emailInput, emailType);
      userEvent.type(passwordInput, passwordType);
      mockFetchLoginAPI(emailType, passwordType);
      userEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(screen.getByText('email can`t be null')).toBeInTheDocument();
      expect(screen.getByText('password can`t be null')).toBeInTheDocument();
    });
  });

  it('should render alert message "email can`t be null"', async () => {
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Password');
    const loginButton = screen.getByTestId('login-button');

    const emailType = '';
    const passwordType = '12345678';

    act(() => {
      userEvent.type(emailInput, emailType);
      userEvent.type(passwordInput, passwordType);
      mockFetchLoginAPI(emailType, passwordType);
      userEvent.click(loginButton);
    });

    await waitFor(() => expect(screen.getByText('email can`t be null')).toBeInTheDocument());
  });

  it('should render alert message "password can`t be null"', async () => {
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Password');
    const loginButton = screen.getByTestId('login-button');

    const emailType = 'correct@mail.com';
    const passwordType = '';

    act(() => {
      userEvent.type(emailInput, emailType);
      userEvent.type(passwordInput, passwordType);
      mockFetchLoginAPI(emailType, passwordType);
      userEvent.click(loginButton);
    });

    await waitFor(() => expect(screen.getByText('password can`t be null')).toBeInTheDocument());
  });

  it('should render alert message "Wrong email or password"', async () => {
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Password');
    const loginButton = screen.getByTestId('login-button');

    const emailType = 'wrong@mail.com';
    const passwordType = '12345678';

    act(() => {
      userEvent.type(emailInput, emailType);
      userEvent.type(passwordInput, passwordType);
      mockFetchLoginAPI(emailType, passwordType);
      userEvent.click(loginButton);
    });

    await waitFor(() => expect(screen.getByText('Wrong email or password')).toBeInTheDocument());
  });

  it('should render alert message "Login success"', async () => {
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Password');
    const loginButton = screen.getByTestId('login-button');

    const emailType = 'correct@mail.com';
    const passwordType = '12345678';

    act(() => {
      userEvent.type(emailInput, emailType);
      userEvent.type(passwordInput, passwordType);
      mockFetchLoginAPI(emailType, passwordType);
      userEvent.click(loginButton);
    });

    await waitFor(() => expect(screen.getByText('Login success')).toBeInTheDocument());
  });
});

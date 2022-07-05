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

describe('Login', () => {
  beforeEach(() => {
    fetch.resetMocks();
    render(<LoginComp />);
  });

  function mockFetchLoginAPI(email, password, isServerDown) {
    if (isServerDown) return fetch.mockReject(() => Promise.reject('505'));

    let mockResponse = {};
    const correctEmail = 'correct@mail.com';
    const correctPassword = '12345678';

    if (email !== correctEmail) {
      mockResponse = { status: 'Failed', msg: 'Wrong email or password' };
    } else if (password !== correctPassword) {
      mockResponse = { status: 'Failed', msg: 'Wrong email or password' };
      return;
    } else if (email === correctEmail && password === correctPassword) {
      mockResponse = { token: '123', msg: 'Login success' };
    }

    fetch.mockResponseOnce(JSON.stringify(mockResponse));
  }

  it('render fail alert internal server error', async () => {
    const loginButton = screen.getByTestId('login-button');

    act(() => {
      mockFetchLoginAPI(undefined, undefined, true);

      userEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(screen.getByText('something went wrong')).toBeInTheDocument();
    });
  });

  it('render fail alert invalid credentials', async () => {
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

    await waitFor(() => {
      expect(screen.getByText('Wrong email or password')).toBeInTheDocument();
    });
  });

  it('render success alert', async () => {
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

    await waitFor(() => {
      expect(screen.getByText('Login success')).toBeInTheDocument();
    });
  });
});

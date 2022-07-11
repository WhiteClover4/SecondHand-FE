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

  it('should render alert message "something went wrong"', async () => {
    act(() => {
      mockFetchLoginAPI(undefined, undefined, true);
      userEvent.click(screen.getByTestId('login-button'));
    });

    await waitFor(() => expect(screen.getByText('something went wrong')).toBeInTheDocument());
  });

  it('should render double alert message "email can`t be null" and "password can`t be null"', async () => {
    act(() => {
      mockFetchLoginAPI('', '');
      userEvent.click(screen.getByTestId('login-button'));
    });

    await waitFor(() => {
      expect(screen.getByText('email can`t be null')).toBeInTheDocument();
      expect(screen.getByText('password can`t be null')).toBeInTheDocument();
    });
  });

  it('should render alert message "email can`t be null"', async () => {
    act(() => {
      mockFetchLoginAPI('', '12345678');
      userEvent.click(screen.getByTestId('login-button'));
    });

    await waitFor(() => expect(screen.getByText('email can`t be null')).toBeInTheDocument());
  });

  it('should render alert message "password can`t be null"', async () => {
    act(() => {
      mockFetchLoginAPI('correct@mail.com', '');
      userEvent.click(screen.getByTestId('login-button'));
    });

    await waitFor(() => expect(screen.getByText('password can`t be null')).toBeInTheDocument());
  });

  it('should render alert message "Wrong email or password"', async () => {
    act(() => {
      mockFetchLoginAPI('wrong@mail.com', '12345678');
      userEvent.click(screen.getByTestId('login-button'));
    });

    await waitFor(() => expect(screen.getByText('Wrong email or password')).toBeInTheDocument());
  });

  it('should render alert message "Login success"', async () => {
    act(() => {
      mockFetchLoginAPI('correct@mail.com', '12345678');
      userEvent.click(screen.getByTestId('login-button'));
    });

    await waitFor(() => expect(screen.getByText('Login success')).toBeInTheDocument());
  });
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

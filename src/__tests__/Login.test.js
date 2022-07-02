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

  it('success', async () => {
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Password');
    const loginButton = screen.getByTestId('login-button');

    act(() => {
      userEvent.type(emailInput, 'correct@mail.com');
      userEvent.type(passwordInput, '12345678');

      fetch.mockResponseOnce(JSON.stringify({ token: '123', msg: 'Login success' }));

      userEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Login success')).toBeInTheDocument();
    });
  });
});

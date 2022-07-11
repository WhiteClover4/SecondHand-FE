import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ShowALert } from '../App';
import Register from '../pages/Register';
import { store } from '../redux/store';

const RegisterComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ShowALert />
      <Register />
    </Provider>
  </BrowserRouter>
);

describe('Register page render alert properly', () => {
  beforeEach(() => {
    fetch.resetMocks();
    render(<RegisterComp />);
  });

  it('should render alert message "something went wrong"', async () => {
    act(() => {
      mockFetchRegisterAPI(undefined, undefined, undefined, true);

      userEvent.click(screen.getByTestId('register-button'));
    });

    await waitFor(() => expect(screen.getByText('something went wrong')).toBeInTheDocument());
  });

  it('should render many alert message', async () => {
    act(() => {
      mockFetchRegisterAPI('', '', '');

      userEvent.click(screen.getByTestId('register-button'));
    });

    await waitFor(() => {
      expect(screen.getByText('name cant be null')).toBeInTheDocument();
      expect(screen.getByText('name must be minimum 3 length')).toBeInTheDocument();
      expect(screen.getByText('email cant be null')).toBeInTheDocument();
      expect(screen.getByText('must be an email')).toBeInTheDocument();
      expect(screen.getByText('password cant be null')).toBeInTheDocument();
      expect(screen.getByText('password must be minimum 8 length')).toBeInTheDocument();
    });
  });

  it('should render alert message "User created successfully"', async () => {
    act(() => {
      mockFetchRegisterAPI('correct', 'correct@mail.comd', '12345678');

      userEvent.click(screen.getByTestId('register-button'));
    });

    await waitFor(() => expect(screen.getByText('User created successfully')).toBeInTheDocument());
  });
});

function mockFetchRegisterAPI(name, email, password, isServerDown) {
  if (isServerDown) return fetch.mockReject(() => Promise.reject('505'));

  let mockResponse = {};

  if (!email && !password && !name) mockResponse = { errors: nullErrors };
  else if (email && password && name) mockResponse = registerSuccess;

  fetch.mockResponseOnce(JSON.stringify(mockResponse));
}

const nullErrors = [
  { msg: 'name cant be null', param: 'name', location: 'body' },
  { msg: 'name must be minimum 3 length', param: 'name', location: 'body' },
  { msg: 'email cant be null', param: 'email', location: 'body' },
  { msg: 'must be an email', param: 'email', location: 'body' },
  { msg: 'password cant be null', param: 'password', location: 'body' },
  { msg: 'password must be minimum 8 length', param: 'password', location: 'body' },
];

const registerSuccess = { status: 'success', msg: 'User created successfully' };

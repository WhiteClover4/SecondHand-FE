/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ShowALert } from '../App';
import Profile from '../pages/Profile';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as profileAPI from '../services/api/profile';

jest.mock('../services/api/profile');

const ProfileComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ShowALert />
      <Profile />
    </Provider>
  </BrowserRouter>
);

describe('Profile', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<ProfileComp />);
  });

  it('should able to type', () => {
    const inputNameElement = screen.getByPlaceholderText('Nama');
    const inputCityElement = screen.getByTestId('city');
    const inpuAddressElement = screen.getByPlaceholderText('Contoh: Jalan Ikan Hiu 33');
    const inputPhonenumberElement = screen.getByPlaceholderText('contoh: +628123456789');

    userEvent.type(inputNameElement, 'nama user');
    userEvent.selectOptions(inputCityElement, 'SIDOARJO');
    userEvent.type(inpuAddressElement, 'alamat user');
    userEvent.type(inputPhonenumberElement, 'no HP user');

    expect(inputNameElement).toHaveValue('nama user');
    expect(inputCityElement).toHaveValue('SIDOARJO');
    expect(inpuAddressElement).toHaveValue('alamat user');
    expect(inputPhonenumberElement).toHaveValue('no HP user');
  });

  it('should rendered alert "Data updated successfully"', async () => {
    let submitBtn;

    await waitFor(() => {
      submitBtn = screen.getByText(/simpan/i);
    });

    expect(submitBtn).toBeInTheDocument();

    profileAPI.updateProfileService = jest
      .fn()
      .mockResolvedValue({ status: 'Success', msg: 'Data updated successfully' });

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Data updated successfully'));
    });
  });
});

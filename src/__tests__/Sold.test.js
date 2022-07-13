/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sold from '../pages/seller/Sold';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as transactionAPI from '../services/api/transaction';

jest.mock('../services/api/transaction');

const SoldComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Sold />
    </Provider>
  </BrowserRouter>
);

describe('Sold page', () => {
  beforeEach(() => {
    transactionAPI.getAllHistoryService = jest.fn().mockResolvedValue(mockResponse);
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<SoldComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Sold page content rendered properly', async () => {
    expect(screen.getByText('Semua Produk')).toBeInTheDocument();
    expect(screen.getByText('Diminati')).toBeInTheDocument();
    expect(screen.getByText('Terjual')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(mockResponse.data.length);
    });
  });
});

const mockResponse = {
  status: 'success',
  msg: 'Semua produk ditampilkan',
  data: [
    {
      id: 4,
      name: 'coba draft',
      description: 'tes',
      price: 10000,
      status: 'DRAFT',
      category: 'Baju',
      isPublished: true,
      ProductImage: null,
    },
    {
      id: 7,
      name: 'tesla',
      description: 'ehe',
      price: 20000,
      status: 'DRAFT',
      category: 'Kendaraan',
      isPublished: true,
      ProductImage:
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657632846/NaN/vwdcii158njgn2g9wyqt.png',
    },
    {
      id: 8,
      name: 'edit produk',
      description: '12321',
      price: 123213,
      status: 'DRAFT',
      category: 'Baju',
      isPublished: true,
      ProductImage: null,
    },
    {
      id: 3,
      name: 'iphone 13 pro',
      description: 'hp mahal bos',
      price: 20000000,
      status: 'DRAFT',
      category: 'Elektronik',
      isPublished: true,
      ProductImage:
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657199848/NaN/yscpbvtcozvfiglvz2ke.png',
    },
  ],
};

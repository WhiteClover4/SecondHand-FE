/* eslint-disable no-import-assign */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Transaction from '../pages/seller/transaction/[buyer_name]';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as transactionAPI from '../services/api/transaction';

const TransactionComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Transaction />
    </Provider>
  </BrowserRouter>
);

describe('Transaction page', () => {
  beforeEach(() => {
    transactionAPI.getTransactionService = jest.fn().mockResolvedValue(mockResponse);
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<TransactionComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('transaction page rendered content properly', async () => {
    expect(screen.getByText('Info Penawar')).toBeInTheDocument();
    expect(screen.getByText('Daftar Produkmu yang Ditawar')).toBeInTheDocument();
    expect(await screen.findByText('6 Jul, 1:32')).toBeInTheDocument();
    expect(await screen.findByText('Ini Jam Tangan Kok')).toBeInTheDocument();
    expect(await screen.findByText('Rp 1.760.000')).toBeInTheDocument();
    expect(await screen.findByText('Ditawar Rp 100.000')).toBeInTheDocument();
  });
});

const mockResponse = {
  status: 'success',
  msg: 'Transaction Ditemukan',
  data: {
    id: 7,
    buyer_name: 'Test Lagi',
    buyer_city: 'Semarang',
    buyer_profile_picture:
      'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657112546/NaN/f7mwkxf71kj3s5ngfguz.jpg',
    buyer_phone_number: '089538163209',
    product_name: 'Ini Jam Tangan Kok',
    product_price: 1760000,
    product_offer: 100000,
    product_pictures:
      'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657119781/NaN/uinsa1vasughfqqr16m5.jpg',
    status: 'ACCEPTED',
    date: '6 Jul, 1:32',
  },
};

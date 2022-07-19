/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Products from '../pages/seller/Products';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as productAPI from '../services/api/product';

jest.mock('../services/api/product');

const SellerProductsComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Products />
    </Provider>
  </BrowserRouter>
);

describe('SellerProducts', () => {
  beforeEach(() => {
    productAPI.getSellerProductsService = jest.fn().mockResolvedValue(mockResponse);
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<SellerProductsComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('seller products page content rendered properly', async () => {
    expect(screen.getByText('Produk')).toBeInTheDocument();
    expect(screen.getByText('Diminati')).toBeInTheDocument();
    expect(screen.getByText('Terjual')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Tambah Produk')).toBeInTheDocument();
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

/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ShowALert } from '../App';
import ProductDetail from '../pages/product/[product_name]';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as productAPI from '../services/api/product';

jest.mock('../services/api/product');

const ProductDetailComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ShowALert />
      <ProductDetail />
    </Provider>
  </BrowserRouter>
);

describe('Product detail', () => {
  beforeEach(() => {
    productAPI.getProductService = jest.fn().mockResolvedValue(mockResponseGetProduct);
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<ProductDetailComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('rendered product detail page properly', async () => {
    await waitFor(() => {
      expect(screen.getByText('iphone 13 pro')).toBeInTheDocument();
      expect(screen.getByText('hp mahal bos')).toBeInTheDocument();
      expect(screen.getByText('Elektronik')).toBeInTheDocument();
      expect(screen.getByText('alfirman')).toBeInTheDocument();
      expect(screen.getByText('MANOKWARI')).toBeInTheDocument();
    });
  });

  it('should be able to open and close modal', async () => {
    expect(screen.queryByText('Masukkan Harga Tawarmu')).not.toBeInTheDocument();

    userEvent.click(await screen.findByText('Saya tertarik dan ingin nego'));

    expect(screen.getByText('Masukkan Harga Tawarmu')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('close-modal'));

    expect(screen.queryByText('Masukkan Harga Tawarmu')).not.toBeInTheDocument();
  });

  it('should be able to bid product', async () => {
    userEvent.click(await screen.findByText('Saya tertarik dan ingin nego'));

    act(async () => {
      productAPI.bidProductService = jest.fn().mockResolvedValue(mockResponseErrorBidProduct);

      userEvent.click(screen.getByText('Kirim'));

      await waitFor(() => {
        expect(screen.getByText('offer_price cant be null')).toBeInTheDocument();
      });
    });

    act(async () => {
      productAPI.bidProductService = jest.fn().mockResolvedValue(mockResponseSuccessBidProduct);

      userEvent.click(await screen.findByText('Kirim'));

      await waitFor(() => {
        expect(screen.getByText('Harga tawarmu berhasil dikirim ke penjual')).toBeInTheDocument();
      });
    });
  });
});

const mockResponseGetProduct = {
  status: 'success',
  msg: 'Produk Ditemukan',
  data: {
    id: 3,
    name: 'iphone 13 pro',
    description: 'hp mahal bos',
    price: 20000000,
    category: 'Elektronik',
    isPublished: true,
    product_images: [
      {
        id: 22,
        product_id: 3,
        product_pictures:
          'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657199848/NaN/yscpbvtcozvfiglvz2ke.png',
        createdAt: '2022-07-07T13:17:29.102Z',
        updatedAt: '2022-07-07T13:17:29.102Z',
      },
    ],
    seller: {
      name: 'alfirman',
      city: 'MANOKWARI',
      profile_picture:
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657645235/NaN/biqpr7zgqyfkckjigzsh.png',
    },
  },
};

const mockResponseErrorBidProduct = {
  errors: [{ value: '', msg: 'offer_price cant be null', param: 'offer_price', location: 'body' }],
};

const mockResponseSuccessBidProduct = {
  status: 'success',
  msg: 'Harga tawarmu berhasil dikirim ke penjual',
  data: {
    id: 15,
    seller_id: 6,
    buyer_id: 4,
    product_id: 6,
    offer_price: 1000,
    status: 'OFFERED',
    updatedAt: '2022-07-12T17:38:59.157Z',
    createdAt: '2022-07-12T17:38:59.157Z',
  },
};

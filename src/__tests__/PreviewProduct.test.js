/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ShowALert } from '../App';
import PreviewProduct from '../pages/seller/product/[product_name]/PreviewProduct';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as productAPI from '../services/api/product';

jest.mock('../services/api/product');

const PreviewProductComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ShowALert />
      <PreviewProduct />
    </Provider>
  </BrowserRouter>
);

describe('preview product', () => {
  beforeEach(() => {
    productAPI.getSellerProductService = jest.fn().mockResolvedValue(mockResponseGetProduct);
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<PreviewProductComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('rendered preview product page properly', async () => {
    expect(await screen.findByText('tesla'));
    expect(await screen.findAllByText('ehe'));
    expect(await screen.findByText('alfirman'));
    expect(await screen.findByText('MANOKWARI'));
  });
});

const mockResponseGetProduct = {
  status: 'success',
  msg: 'Produk Ditemukan',
  data: {
    id: 7,
    name: 'tesla',
    description: 'ehe',
    price: 20000,
    category: 'Kendaraan',
    isPublished: true,
    product_images: [
      {
        id: 18,
        product_id: 7,
        product_pictures:
          'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657175976/NaN/kujjiucoawiv2dsoi8cy.png',
        createdAt: '2022-07-07T06:39:37.345Z',
        updatedAt: '2022-07-07T06:39:37.345Z',
      },
      {
        id: 23,
        product_id: 7,
        product_pictures:
          'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657632845/NaN/csijd0wai1o172ypcfsd.jpg',
        createdAt: '2022-07-12T13:34:06.895Z',
        updatedAt: '2022-07-12T13:34:06.895Z',
      },
      {
        id: 24,
        product_id: 7,
        product_pictures:
          'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657632846/NaN/vwdcii158njgn2g9wyqt.png',
        createdAt: '2022-07-12T13:34:06.895Z',
        updatedAt: '2022-07-12T13:34:06.895Z',
      },
    ],
    seller: {
      name: 'alfirman',
      city: 'MANOKWARI',
      profile_picture:
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657645235/NaN/biqpr7zgqyfkckjigzsh.png',
    },
    isBuyed: false,
  },
};

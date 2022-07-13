/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ShowALert } from '../App';
import ProductInput from '../pages/seller/product/ProductInput';
import { CHANGE_AUTH, SET_TOKEN } from '../redux/slice/auth';
import { store } from '../redux/store';
import * as productAPI from '../services/api/product';

jest.mock('../services/api/product');

const ProductInputComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ShowALert />
      <ProductInput />
    </Provider>
  </BrowserRouter>
);

describe('ProductInput', () => {
  beforeEach(() => {
    store.dispatch(SET_TOKEN('123'));
    store.dispatch(CHANGE_AUTH(true));
    render(<ProductInputComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should able to type', () => {
    const inputProductName = screen.getByPlaceholderText('Nama Produk');
    const inputProductPrice = screen.getByPlaceholderText('Rp. 0,00');
    const inputProductCategory = screen.getByTestId('category');
    const inputProductDescription = screen.getByPlaceholderText('Contoh: Jalan Ikan Hiu 33');

    userEvent.type(inputProductName, 'nama produk');
    userEvent.type(inputProductPrice, '1000');
    userEvent.selectOptions(inputProductCategory, 'Elektronik');
    userEvent.type(inputProductDescription, 'deskripsi produk');

    expect(inputProductName).toHaveValue('nama produk');
    expect(inputProductPrice).toHaveValue(1000);
    expect(inputProductCategory).toHaveValue('Elektronik');
    expect(inputProductDescription).toHaveValue('deskripsi produk');
  });

  it('should be able to publish product', async () => {
    const submitBtn = await screen.findByText(/Terbitkan/i);

    expect(submitBtn).toBeInTheDocument();

    act(async () => {
      productAPI.publishProductService = jest
        .fn()
        .mockResolvedValue({ status: 'success', msg: 'Product published' });

      userEvent.click(submitBtn);

      await waitFor(() => {
        expect(screen.getByText('Product published'));
      });
    });

    act(async () => {
      productAPI.publishProductService = jest.fn().mockRejectedValue(505);

      userEvent.click(submitBtn);

      await waitFor(() => {
        expect(screen.getByText('something went wrong'));
      });
    });
  });
});

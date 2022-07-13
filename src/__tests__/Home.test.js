/* eslint-disable no-import-assign */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { store } from '../redux/store';
import * as productAPI from '../services/api/product';
import categories from '../_content/categories.json';

jest.mock('../services/api/product');

const HomeComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Home />
    </Provider>
  </BrowserRouter>
);

describe('Home', () => {
  beforeEach(() => {
    productAPI.getProductsService = jest.fn().mockResolvedValue(mockResponse);
    render(<HomeComp />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('home page content rendered properly', async () => {
    expect(screen.getByText(/Telusuri Kategori/i)).toBeInTheDocument();

    expect(screen.getByText(/jual/i)).toBeInTheDocument();

    categories.forEach((category) => {
      expect(screen.getByTestId('tab-' + category.name)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(mockResponse.data.length);
    });
  });

  it('able to set active tab', () => {
    const tabSemua = screen.getByTestId('tab-Semua');

    const tabHobi = screen.getByTestId('tab-Hobi');

    expect(tabSemua).toHaveClass('bg-primary-04');

    expect(tabHobi).toHaveClass('bg-primary-01');

    userEvent.click(tabHobi);

    expect(tabSemua).toHaveClass('bg-primary-01');

    expect(tabHobi).toHaveClass('bg-primary-04');
  });
});

const mockResponse = {
  status: 'success',
  msg: 'homepage',
  data: [
    {
      id: 6,
      name: 'Jam Tangan Bagus Banget',
      description: 'Lorem Ipsum',
      price: 20000000,
      status: 'DRAFT',
      category: 'Hobi',
      isPublished: true,
      ProductImage:
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657112702/NaN/fmttwzagk4akcn5d5pwj.jpg',
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
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657175976/NaN/kujjiucoawiv2dsoi8cy.png',
    },
    {
      id: 9,
      name: 'Jam Tangan Bagus Pollll',
      description: 'Lorem Ipsum',
      price: 17500000,
      status: 'DRAFT',
      category: 'Hobi',
      isPublished: true,
      ProductImage:
        'https://res.cloudinary.com/dfhjxw9zd/image/upload/v1657197380/NaN/tlptw3xjurrm5xt6olmt.jpg',
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
      id: 4,
      name: 'coba draft',
      description: 'tes',
      price: 10000,
      status: 'DRAFT',
      category: 'Baju',
      isPublished: true,
      ProductImage: null,
    },
  ],
};

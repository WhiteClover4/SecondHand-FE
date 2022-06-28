import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { store } from '../redux/store';

const HomeComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Home />
    </Provider>
  </BrowserRouter>
);

describe('Home', () => {
  it('home page content rendered properly', () => {
    const { getByText } = render(<HomeComp />);

    expect(getByText(/Telusuri Kategori/i)).toBeInTheDocument();

    expect(getByText(/jual/i)).toBeInTheDocument();
  });
});

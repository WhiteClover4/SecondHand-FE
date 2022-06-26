import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home', () => {
  it('home page content rendered properly', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Telusuri Kategori/i)).toBeInTheDocument();

    expect(getByText(/jual/i)).toBeInTheDocument();
  });
});

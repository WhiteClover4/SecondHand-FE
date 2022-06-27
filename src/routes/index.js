import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import Product from '../pages/seller/Product';
import PageAuthLayout from '../pages/PageAuthLayout';
import Home from '../pages/Home';

export default function RoutesApp() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="seller/product" element={<Product />} />
      <Route path="/page-auth" element={<PageAuthLayout />} />
    </Switch>
  );
}

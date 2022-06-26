import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import PageAuthLayout from '../pages/PageAuthLayout';
import Home from '../pages/Home';
import ProductsSeller from '../pages/seller/Products';

export default function RoutesApp() {
  return (
    <Switch>
      <Route element={<Home />} path="/" />
      <Route element={<Components />} path="/components" />
      <Route element={<PageAuthLayout />} path="/page-auth" />
      <Route element={<ProductsSeller />} path="/seller/products" />
    </Switch>
  );
}

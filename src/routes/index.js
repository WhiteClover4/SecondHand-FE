import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import PageAuthLayout from '../pages/PageAuthLayout';
import Home from '../pages/Home';
import Product from '../pages/Product';

export default function RoutesApp() {
  return (
    <Switch>
      <Route element={<Home />} path="/" />
      <Route element={<Product />} path="/product" />
      <Route element={<Components />} path="/components" />
      <Route element={<PageAuthLayout />} path="/page-auth" />
    </Switch>
  );
}

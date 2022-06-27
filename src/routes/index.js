import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Product from '../pages/[productName]';
import InterestedSeller from '../pages/seller/Interested';
import SoldSeller from '../pages/seller/Sold';
import ProductsSeller from '../pages/seller/Products';

export default function RoutesApp() {
  return (
    <Switch>
      <Route element={<Home />} path="/" />
      <Route element={<Product />} path="/product/:productName" />
      <Route element={<Components />} path="/components" />
      <Route element={<InterestedSeller />} path="/seller/interested" />
      <Route element={<SoldSeller />} path="/seller/sold" />
      <Route element={<ProductsSeller />} path="/seller/products" />
      <Route element={<Register />} path="/register" />
    </Switch>
  );
}

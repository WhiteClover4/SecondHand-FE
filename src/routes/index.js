import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import Bid from '../pages/seller/Bid';
import ProductSeller from '../pages/seller/Product';
import Product from '../pages/[productName]';
import Home from '../pages/Home';
import InterestedSeller from '../pages/seller/Interested';
import SoldSeller from '../pages/seller/Sold';
import ProductsSeller from '../pages/seller/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route element={<Components />} path="/components" />
      <Route element={<Bid />} path="/seller/bid" />
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<Product />} path="/product/:productName" />
      <Route element={<ProductsSeller />} path="/seller/products" />
      <Route element={<InterestedSeller />} path="/seller/interested" />
      <Route element={<SoldSeller />} path="/seller/sold" />
      <Route element={<ProductSeller />} path="/seller/product" />
    </Switch>
  );
}

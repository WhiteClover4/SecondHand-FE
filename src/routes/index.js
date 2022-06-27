import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProductsSeller from '../pages/seller/Products';
import InterestedSeller from '../pages/seller/Interested';
import SoldSeller from '../pages/seller/Sold';
import ProductSeller from '../pages/seller/product/ProductSeller';
import PreviewProduct from '../pages/seller/product/[product-name]/PreviewProduct';
import Bid from '../pages/seller/Bid';
import Components from '../pages/Components';

export default function RoutesApp() {
  return (
    <Switch>
      <Route element={<Home />} path="/" />
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<ProductsSeller />} path="/seller/products" />
      <Route element={<InterestedSeller />} path="/seller/interested" />
      <Route element={<SoldSeller />} path="/seller/sold" />
      <Route element={<ProductSeller />} path="/seller/product/add" />
      <Route element={<ProductSeller />} path="/seller/product/:product_name" />
      <Route element={<PreviewProduct />} path="/seller/product/:product_name/preview" />
      <Route element={<Bid />} path="/seller/bid/:buyer_name" />
      <Route element={<Components />} path="/components" />
    </Switch>
  );
}

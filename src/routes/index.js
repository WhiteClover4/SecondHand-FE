import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProductsSeller from '../pages/seller/Products';
import InterestedSeller from '../pages/seller/Interested';
import SoldSeller from '../pages/seller/Sold';
import ProductInput from '../pages/seller/product/ProductInput';
import PreviewProduct from '../pages/seller/product/[product_name]/PreviewProduct';
import Transaction from '../pages/seller/transaction/[buyer_name]';
import ProductDetail from '../pages/product/[product_name]';
import Notification from '../pages/Notification';
// import Components from '../pages/Components';

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
      <Route element={<ProductInput />} path="/seller/product/add" />
      <Route element={<ProductInput />} path="/seller/product/:product_name" />
      <Route element={<PreviewProduct />} path="/seller/product/:product_name/preview" />
      <Route element={<Transaction />} path="/seller/transaction/:buyer_name" />
      <Route element={<ProductDetail />} path="/product/:product_name" />
      <Route element={<Notification />} path="/notification" />
      {/* <Route element={<Components />} path="/components" /> */}
    </Switch>
  );
}

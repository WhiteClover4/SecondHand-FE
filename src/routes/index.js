import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import PageAuthLayout from '../pages/PageAuthLayout';
import Home from '../pages/Home';
import SoldSeller from '../pages/seller/Sold';

export default function RoutesApp() {
  return (
    <Switch>
      <Route element={<Home />} path="/" />
      <Route element={<Components />} path="/components" />
      <Route element={<PageAuthLayout />} path="/page-auth" />
      <Route element={<SoldSeller />} path="/seller/sold" />
    </Switch>
  );
}

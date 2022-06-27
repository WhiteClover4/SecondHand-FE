import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import Bid from '../pages/seller/Bid';
import PageAuthLayout from '../pages/PageAuthLayout';
import Home from '../pages/Home';

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route element={<Components />} path="/components" />
      <Route element={<Bid />} path="/seller/bid" />
      <Route element={<Home />} path="/" />
      <Route element={<PageAuthLayout />} path="/page-auth" />
    </Switch>
  );
}

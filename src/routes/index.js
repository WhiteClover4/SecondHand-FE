import { Route, Routes as Switch } from 'react-router-dom';
import Components from '../pages/Components';
import PageAuthLayout from '../pages/PageAuthLayout';
import Register from '../pages/Register';

export default function RoutesApp() {
  return (
    <Switch>
      <Route path="/components" element={<Components />} />
      <Route path="/page-auth" element={<PageAuthLayout />} />
<Route path="/register" element={<Register />} />
    </Switch>
  );
}
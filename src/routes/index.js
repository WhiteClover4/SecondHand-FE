import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import SellerProduct from "../pages/SellerProduct";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
      <Route path="/seller" element={<SellerProduct />} />
    </Switch>
  );
}

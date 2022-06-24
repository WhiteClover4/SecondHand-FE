import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import SellerLayoutPage from "../pages/SellerLayoutPage";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
      <Route path="/seller-layout-page" element={<SellerLayoutPage />} />
    </Switch>
  );
}

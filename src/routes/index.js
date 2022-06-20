import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import Product from "../pages/Product";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
      <Route path="/product" element={<Product />} />
    </Switch>
  );
}

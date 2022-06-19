import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import Home from "../pages/Home";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
    </Switch>
  );
}

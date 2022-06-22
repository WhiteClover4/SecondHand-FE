import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import Login from "../pages/Login";

export default function RoutesApp() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/login" element={<Login />} />
      <Route path="/page-auth" element={<PageAuthLayout />} />
    </Switch>
  );
}

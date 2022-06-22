import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import Profile from "../pages/Profile";
import PageAuthLayout from "../pages/PageAuthLayout";
import Home from "../pages/Home";

export default function RoutesApp() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/page-auth" element={<PageAuthLayout />} />
    </Switch>
  );
}

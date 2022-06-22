import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Switch>
  );
}

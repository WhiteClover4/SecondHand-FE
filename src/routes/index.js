import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import Register from "../pages/Register";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
      <Route path="/register" element={<Register />} />
      
    </Switch>
  );
}

import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
    </Switch>
  );
}

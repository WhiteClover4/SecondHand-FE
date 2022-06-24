import { Route, Routes as Switch } from "react-router-dom";
import Components from "../pages/Components";
import InfoPenawaran from "../pages/InfoPenawaran";

export default function RoutesApp() {
  return (
    <Switch>
      {/* <Route path="/" element={<Components />} /> */}
      <Route path="/components" element={<Components />} />
      <Route path="/penawaran" element={<InfoPenawaran />} />
    </Switch>
  );
}

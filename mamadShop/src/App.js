import { El } from "./library/el/El";
import starter from "./pages/starter";
import welcome from "./pages/welcome";
export const App = () => {
  return El({
    element: "div",
    id: "rootsEl",
    className: "flex flex-col",
  });
};

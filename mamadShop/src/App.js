import { El } from "./library/el/El";

export const App = () => {
  return El({
    element: "div",
    id: "rootsEl",
    className: "flex flex-col",
    children: [],
  });
};

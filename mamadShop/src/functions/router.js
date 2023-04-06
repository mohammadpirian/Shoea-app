import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import { root } from "postcss";
const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};
export const Router = () => {
  const router = new Navigo("/");

  router
    .on("/", () => {
      changeContents(starter);
    })
    .on("/welcome", () => {
      changeContents(welcome);
    });

  router.resolve();
  return router;
};

// .on("/", () => {

//   root.append(starter());
// })

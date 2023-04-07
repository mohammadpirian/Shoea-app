import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import { root } from "postcss";
import swiper1 from "../pages/swipers/swiper1";
import swiper2 from "../pages/swipers/swiper2";
import swiper3 from "../pages/swipers/swiper3";
import login from "../pages/login";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};

export const Router = () => {
  router
    .on("/", () => {
      changeContents(starter);
    })
    .on("/welcome", () => {
      changeContents(welcome);
    })
    .on("/swiper1", () => {
      changeContents(swiper1);
    })
    .on("/swiper2", () => {
      changeContents(swiper2);
    })
    .on("/swiper3", () => {
      changeContents(swiper3);
    })
    .on("/login", () => {
      changeContents(login);
    });

  router.resolve();
  return router;
};

// .on("/", () => {

//   root.append(starter());
// })

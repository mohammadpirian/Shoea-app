import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import { root } from "postcss";
import swiper1 from "../pages/swipers/swiper1";
import swiper2 from "../pages/swipers/swiper2";
import swiper3 from "../pages/swipers/swiper3";
import login from "../pages/login";
import home from "../pages/home";
import cart from "../pages/cart";
import orders from "../pages/orders";
import wallet from "../pages/wallet";
import profile from "../pages/profile";
import productModal from "../pages/productModal";
import { datalogin } from "./datalogin";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};
const changeContents2 = (target, item) => {
  // console.log(item);
  target(item).then((res) => {
    const root = document.getElementById("rootsEl");
    root.innerHTML = "";
    // console.log(res);
    root.append(res);
  });
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
      datalogin();
    })
    .on("/home", () => {
      changeContents2(home);
    })
    .on("/cart", () => {
      changeContents2(cart);
    })
    .on("/orders", () => {
      changeContents(orders);
    })
    .on("/wallet", () => {
      changeContents2(wallet);
    })
    .on("/profile", () => {
      changeContents(profile);
    })
    .on("/product/:id", (item) => {
      changeContents2(productModal, item.data.id);
    });

  router.resolve();
  return router;
};

// .on("/", () => {

//   root.append(starter());
// })

// console.log(wallet());

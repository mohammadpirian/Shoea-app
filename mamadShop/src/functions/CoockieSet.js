import Cookies from "js-cookie";
import { Router } from "./router";
export const coockieSet = () => {
  if (Cookies.get("token")) {
    console.log("you have a token");
    // Router().navigate("/swiper2");
  } else {
    Router().navigate("/login");
  }
};

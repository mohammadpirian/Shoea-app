import { Router } from "../functions/router";
import { El } from "../library/el/El";
const starter = () => {
  setTimeout(() => {
    Router().navigate("/welcome");
  }, 3000);
  return El({
    element: "div",
    id: "starter",
    className:
      "w-screen h-screen flex flex-col justify-between items-center py-32",
    children: [
      El({
        element: "img",
        id: "img-starter",
        className: "mt-24",
        src: "./src/images/logo/shoea.png",
        // onclick: () => {
        //   Router().navigate("/welcome");
        // },
      }),
      El({
        element: "img",
        id: "img-starter",
        className: "w-10 h-10",
        src: "./src/images/loading/1.gif",
      }),
    ],
  });
};

export default starter;

import { El } from "../library/el/El";
import { router } from "./../functions/router";

const starter = () => {
  setTimeout(() => {
    router.navigate("/welcome");
    console.log("settimeout");
  }, 1000);
  return El({
    element: "div",
    id: "starter",
    className: "w-screen h-screen flex flex-col justify-between items-center",
    children: [
      El({
        element: "img",
        id: "img-starter",
        className: "mt-[394px]",
        src: "./src/images/logo/shoea.png",
        // onclick: () => {
        //   Router().navigate("/welcome");
        // },
      }),
      El({
        element: "img",
        id: "img-starter",
        className: "w-[48px] h-[48px] mb-[117px]",
        src: "./src/images/loading/1.gif",
      }),
    ],
  });
};

export default starter;

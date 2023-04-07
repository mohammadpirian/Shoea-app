import { El } from "../../library/el/El";
import { Router } from "../../functions/router";
const swiper2 = () => {
  return El({
    element: "div",
    id: "swiper2",
    className: "w-screen h-screen flex flex-col items-center",
    children: [
      El({
        element: "img",
        id: "img-swiper2",
        className: "h-[400px] w-full",
        src: "./src/images/img/3.png",
        // onclick: () => {
        //   Router().navigate("/welcome");
        // },
      }),
      El({
        element: "div",
        className: "flex flex-col items-center justify-center p-4",
        children: [
          El({
            element: "p",
            className: "font-semibold text-[24px] text-center mt-2",
            children: ["Your satisfaction is our number one periority"],
          }),
          El({
            element: "img",
            className: "w-20 mt-6",
            src: "./src/images/assets/2of3.png",
          }),
          El({
            element: "button",
            className:
              "bg-gray-800 p-1 w-full rounded-full text-white mt-4 hover:bg-gray-600",
            children: ["Next"],
            onclick: () => {
              Router().navigate("/swiper3");
            },
          }),
        ],
      }),
    ],
  });
};

export default swiper2;

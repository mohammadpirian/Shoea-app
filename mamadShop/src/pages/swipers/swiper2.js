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
        className: "h-[600px] w-full",
        src: "./src/images/img/3.png",
        // onclick: () => {
        //   Router().navigate("/welcome");
        // },
      }),
      El({
        element: "div",
        className: "flex flex-col items-center justify-center px-4",
        children: [
          El({
            element: "p",
            className: "font-[700] text-[32px] text-center mt-[32px]",
            children: ["Your satisfaction is our number one periority"],
          }),
          El({
            element: "img",
            className: "w-[102px] mt-[59px]",
            src: "./src/images/assets/2of3.png",
          }),
          El({
            element: "button",
            className:
              "bg-gray-800 h-[47px] w-[380px] rounded-full text-white absolute bottom-[32px] hover:bg-gray-600",
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

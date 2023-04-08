import { Router } from "../../functions/router";
import { El } from "../../library/el/El";

const swiper3 = () => {
  return El({
    element: "div",
    id: "swiper3",
    className: "w-screen h-screen flex flex-col items-center",
    children: [
      El({
        element: "img",
        id: "img-swiper3",
        className: "h-[600px] w-full",
        src: "./src/images/img/4.png",
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
            children: ["Let’s fulfill your fashion needs with shoearight now!"],
          }),
          El({
            element: "img",
            className: "w-[102px] mt-[14px]",
            src: "./src/images/assets/3of3.png",
          }),
          El({
            element: "button",
            className:
              "bg-gray-800 h-[47px] w-[380px] rounded-full text-white absolute bottom-[32px] hover:bg-gray-600",
            children: ["Get Started"],
            onclick: () => {
              Router().navigate("/login");
            },
          }),
        ],
      }),
    ],
  });
};

export default swiper3;

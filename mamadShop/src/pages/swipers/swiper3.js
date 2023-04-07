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
        className: "h-[400px] w-full",
        src: "./src/images/img/4.png",
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
            className: "font-semibold text-[20px] text-center mt-2",
            children: ["Let’s fulfill your fashion needs with shoearight now!"],
          }),
          El({
            element: "img",
            className: "w-20 mt-6",
            src: "./src/images/assets/3of3.png",
          }),
          El({
            element: "button",
            className:
              "bg-gray-800 p-1 w-full rounded-full text-white mt-4 hover:bg-gray-600",
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

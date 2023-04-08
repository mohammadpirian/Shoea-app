import { Router } from "../functions/router";
import { El } from "../library/el/El";

const welcome = () => {
  return El({
    element: "div",
    id: "welcome",
    className: "w-screen h-screen flex flex-col justify-end overflow-y-hidden",
    children: [
      El({
        element: "img",
        id: "img-welcome",
        className: "",
        src: "./src/images/img/1.png",
      }),
      El({
        element: "img",
        id: "img-welcome",
        className: "absolute",
        src: "./src/images/assets/inner-dark.png",
      }),
      El({
        element: "div",
        className: "absolute  p-4 flex flex-col",
        onclick: () => {
          Router().navigate("/swiper1");
        },
        children: [
          El({
            element: "p",
            className: "text-white font-semibold text-[40px] mb-[16px]",
            children: ["Welcome to 👋"],
          }),
          El({
            element: "p",
            className: "text-white font-bold text-[72px] mb-[28px]",
            children: ["Shoea"],
          }),
          El({
            element: "p",
            className: "text-white font-semibold text-[16px] mb-[44px]",
            children: [
              "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
            ],
          }),
        ],
      }),
    ],
  });
};

export default welcome;

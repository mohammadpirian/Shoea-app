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
        className: "absolute bottom-12 p-4 flex flex-col",
         onclick: () => {
          Router().navigate("/welcome");
         },
        children: [
          El({
            element: "p",
            className: "text-white font-semibold text-[24px]",
            children: ["Welcome to 👋"],
          }),
          El({
            element: "p",
            className: "text-white font-bold text-[40px]",
            children: ["Shoea"],
          }),
          El({
            element: "p",
            className: "text-white text-[13px]",
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

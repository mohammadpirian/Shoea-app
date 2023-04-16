import { Router } from "../../functions/router";
import { El } from "../../library/el/El";

const editButton = () => {
  return El({
    element: "button",
    className: "flex",
    onclick: () => {
      Router().navigate("/shippingAddress");
    },
    children: [
      El({
        element: "img",
        src: "./src/images/icon/edit.svg",
        className: "text-3xl w-6 h-6",
      }),
    ],
  });
};

export default editButton;

import radioButton from "../../components/address/radioButton";
import addressCart from "../../components/address/addressCart";
import { El } from "../../library/el/El";
import "flowbite";

const shippingType = () => {
  return El({
    element: "div",
    className: "items-center bg-gray-50 h-screen",
    children: [
      El({
        element: "div",
        className: "flex justify-between px-7 py-8",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-3",
            children: [
              El({
                element: "ion-icon",
                name: "arrow-back",
                className: "text-xl",
                onclick: () => {
                  history.back();
                },
              }),
              El({
                element: "h1",
                children: "Choose Shipping",
                className: "text-2xl font-medium",
              }),
            ],
          }),
        ],
      }),
      addressCart("Economy", "", radioButton(), "bicycle", "$10"),
      addressCart("Regular", "", radioButton(), "bus", "$15"),
      addressCart("Cargo", "", radioButton(), "train", "$20"),
      addressCart("Express", "", radioButton(), "airplane", "$30"),

      El({
        element: "div",
        className:
          "w-full fixed bottom-0 flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
        children: [
          El({
            element: "button",
            className:
              " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
            children: [
              El({
                element: "span",
                className: "self-center text-sm font-semibold",
                children: "Apply",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default shippingType;

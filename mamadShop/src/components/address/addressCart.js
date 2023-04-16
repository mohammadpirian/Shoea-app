import { El } from "../../library/el/El";

const addressCart = (
  addressName,
  defaultSpan,
  variableItem,
  addressLogo = "location",
  price = ""
) => {
  return El({
    element: "div",
    className:
      "flex items-center justify-between text-left p-4 rounded-3xl bg-white mx-4 mb-4",
    children: [
      El({
        element: "div",
        className: "flex justify-center items-center gap-3",
        children: [
          El({
            element: "div",
            className:
              "relative rounded-full bg-gray-200 w-16 h-16 text-center",
            children: [
              El({
                element: "div",
                className:
                  "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-full w-10 h-10 text-center",
                children: [
                  El({
                    element: "ion-icon",
                    name: addressLogo,
                    className:
                      "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-xl",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-y-1",
            children: [
              El({
                element: "div",
                className: "flex gap-x-2",
                children: [
                  El({
                    element: "p",
                    children: addressName,
                    className: "font-bold text-md",
                  }),
                  defaultSpan,
                ],
              }),
              El({
                element: "p",
                children: "61480 Sunbrook",
                className: "text-gray-600",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        children: [El({
          element: "span",
          children: price,
          className: "font-bold text-lg",
        })],
      }),
      variableItem,
    ],
  });
};

export default addressCart;

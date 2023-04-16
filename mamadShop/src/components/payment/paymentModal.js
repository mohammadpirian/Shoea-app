import { El } from "../../library/el/El";

const paymentModal = () => {
  return El({
    element: "div",
    className:
      "absolute inset-0 bg-gray-300 bg-opacity-80 flex items-center justify-center z-10",
    children: [
      El({
        element: "div",
        className:
          "rounded-3xl pt-4 flex flex-col justify-center items-center w-3/4 bg-white relative",
        children: [
          El({
            element: "img",
            src: "public/assets/images/payment.png",
            className: "w-44",
          }),
          El({
            element: "h1",
            children: "Order Successful!",
            className: "text-xl font-semibold mb-5",
          }),
          El({
            element: "p",
            children: "You have successfully made order",
            className: "text-sm font-light mb-5",
          }),
          El({
            element: "div",
            className: "px-4 mb-5",
            children: [
              El({
                element: "button",
                className: "bg-black rounded-full w-full px-16 py-4",
                children: [
                  El({
                    element: "div",
                    className: "flex items-center text-white justify-center",
                    children: [
                      El({
                        element: "p",
                        className: "self-center text-md font-medium",
                        children: "View Order",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "px-4 mb-5",
            children: [
              El({
                element: "button",
                className: "bg-gray-100 rounded-full w-full px-14 py-4",
                children: [
                  El({
                    element: "div",
                    className:
                      "flex items-center text-slate-800 justify-center",
                    children: [
                      El({
                        element: "p",
                        className: "self-center text-md font-medium",
                        children: "View E-Receipt",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default paymentModal;

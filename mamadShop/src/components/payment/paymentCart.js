import { El } from "../../library/el/El";
import radioButton from "../address/radioButton";

const paymentCart = (paymentLogo, paymentName, totalPricePayment) => {
  // console.log(data);
  return El({
    element: "div",
    className:
      "flex items-center justify-between px-4 py-6 rounded-xl mb-4 bg-white mx-4",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          paymentLogo,
          El({
            element: "span",
            children: paymentName,
            className: "font-bold",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          El({
            element: "span",
            className: "font-medium text-sm",
            children: `$${totalPricePayment}`,
          }),
          radioButton(),
        ],
      }),
    ],
  });
};

export default paymentCart;

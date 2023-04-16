import apple from "../../components/payment/apple";
import google from "../../components/payment/google";
import mastercard from "../../components/payment/mastercard";
import paypal from "../../components/payment/paypal";
import wallet from "../../components/payment/wallet";
import paymentCart from "../../components/payment/paymentCart";
import { El } from "../../library/el/El";
import {
  checkoutdata,
  getDatauser,
  postproductone,
} from "../../functions/axios/transferdata";

const paymentMethod = async () => {
  try {
    const { data } = await checkoutdata();
    // console.log(data);
    let totalPricePayment = data.cart.reduce(
      (acc, item) => item.totalPr + acc,
      0
    );

    return El({
      element: "div",
      className: "items-center bg-gray-50 h-screen",
      children: [
        El({
          element: "div",
          className: "px-6 pt-8 flex justify-between items-center mb-6",
          children: [
            El({
              element: "div",
              className: "flex items-center gap-3",
              children: [
                El({
                  element: "button",
                  className: "flex",
                  children: [
                    El({
                      element: "ion-icon",
                      name: "arrow-back",
                      className: "text-xl",
                      onclick: () => {
                        history.back();
                      },
                    }),
                  ],
                }),
                El({
                  element: "h1",
                  children: "Payment Methods",
                  className: "text-2xl font-medium",
                }),
              ],
            }),
            El({
              element: "button",
              className:
                "border border-solid border-black rounded-lg w-6 h-6 flex justify-center items-center",
              children: [
                El({
                  element: "ion-icon",
                  name: "add-outline",
                  className: "text-base",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "p",
          children: "Select the payment method you want to use.",
          className: "mb-6 text-sm text-gray-600 px-7",
        }),
        paymentCart(wallet(), "My Wallet", totalPricePayment),
        paymentCart(paypal(), "Pay Pal", totalPricePayment),
        paymentCart(google(), "Google", totalPricePayment),
        paymentCart(apple(), "Apple Pay", totalPricePayment),
        paymentCart(
          mastercard(),
          ".... .... .... .... 4679",
          totalPricePayment
        ),

        El({
          element: "div",
          className:
            "w-full fixed bottom-0 flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
          children: [
            El({
              element: "button",
              className:
                " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
              onclick: () => {
                getDatauser(1).then((res) => {
                  const clone = res.data;
                  const empty = [];
                  // console.log(data.cart);
                  clone.order.push(...data.cart);
                  clone.cart = empty;
                  postproductone(1, clone);
                  location.reload();
                });
              },
              children: [
                El({
                  element: "span",
                  className: "self-center text-sm font-semibold",
                  children: "Confirm Payment",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  } catch (error) {}
};

export default paymentMethod;

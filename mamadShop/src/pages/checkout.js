import { Router } from "../functions/router";
import { El } from "../library/el/El";
import addressCart from "../components/address/addressCart";
import editButton from "../components/address/editButton";
import {
  cartdata,
  checkoutdata,
  getDatauser,
} from "../functions/axios/transferdata";
import { cartReducebtnshoe } from "../functions/totalCounter/cartReducebtnshoe";
import { cartIncreasebtnshoe } from "../functions/totalCounter/cartIncreasebtnshoe";
// import editButton from "./../components/address/editButton";
import shoeCart2 from "./../components/cart/shoeCart";
import countItems2 from "./../components/cart/countItem";

const checkout = async () => {
  try {
    const { data } = await checkoutdata();
    // console.log(data);
    // setTimeout(() => {
    //   totalCart(data);
    // }, 0);
    // console.log(data.cart);
    return El({
      element: "div",
      className: "items-center bg-gray-50",
      children: [
        El({
          element: "div",
          className: "p-4 flex items-center justify-between pt-8 px-6",
          children: [
            El({
              element: "div",
              className: "flex items-center gap-3",
              children: [
                El({
                  element: "button",
                  className: "flex",
                  onclick: () => {
                    history.back();
                  },
                  children: [
                    El({
                      element: "img",
                      className: "text-2xl",
                      src: "./src/images/icon/back.svg",
                    }),
                  ],
                }),
                El({
                  element: "h1",
                  className: "text-2xl font-bold",
                  children: "Checkout",
                }),
              ],
            }),
            El({
              element: "ion-icon",
              name: "ellipsis-horizontal-circle",
              className: "text-2xl",
            }),
          ],
        }),
        El({
          element: "h2",
          children: "Shipping Address",
          className: "text-xl font-bold text-left p-6",
        }),
        addressCart("Home", "", editButton()),
        El({
          element: "hr",
          className: "text-gray-500 mx-4",
        }),
        El({
          element: "h2",
          children: "Order List",
          className: "text-xl font-bold text-left p-6",
        }),
        El({
          element: "div",
          children: data.cart.map((item) => {
            return shoeCart2(item, countItems2(item));
          }),
          className: "mb-4",
        }),
        El({
          element: "hr",
          className: "text-gray-500 mx-4",
        }),
        El({
          element: "h2",
          children: "Choose Shipping",
          className: "text-xl font-bold text-left p-6",
        }),
        El({
          element: "button",
          className: "w-full",
          onclick: () => {
            Router().navigate("/shippingType");
          },
          children: [
            El({
              element: "div",
              className:
                "flex items-center justify-between text-left p-4 rounded-2xl mx-4 bg-white",
              children: [
                El({
                  element: "div",
                  className: "flex items-center gap-3",
                  children: [
                    El({
                      element: "ion-icon",
                      name: "car",
                      className: "text-3xl",
                    }),
                    El({
                      element: "p",
                      children: "Choose Shipping Type",
                      className: "font-bold",
                    }),
                  ],
                }),
                El({
                  element: "ion-icon",
                  name: "chevron-forward",
                  className: "text-2xl",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "h2",
          children: "Promo Code",
          className: "text-xl font-bold text-left p-6",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center gap-2 mx-4 mb-8",
          children: [
            El({
              element: "input",
              placeholder: "Enter Promo Code",
              className:
                "bg-gray-100 text-slate-500 font-light py-4 pl-4 rounded-2xl outline-none w-full",
            }),
            El({
              element: "button",
              className: "flex",
              children: [
                El({
                  element: "ion-icon",
                  name: "add-circle",
                  className: "text-5xl",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className: "rounded-2xl mb-10 bg-white mx-4",
          children: [
            El({
              element: "div",
              className: "flex justify-between p-4",
              children: [
                El({
                  element: "p",
                  children: "Amount",
                  className: "text-gray-600 text-lg",
                }),
                El({
                  element: "span",
                  children: [
                    "$",
                    data.cart.reduce((acc, item) => item.totalPr + acc, 0),
                  ],
                  className: "text-gray-700 text-lg",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex justify-between p-4",
              children: [
                El({
                  element: "p",
                  children: "Shipping",
                  className: "text-gray-600 text-lg font-normal",
                }),
                El({
                  element: "span",
                  children: "-",
                  className: "text-gray-700 font-bold text-lg",
                }),
              ],
            }),
            El({
              element: "hr",
              className: "text-gray-500 mx-4",
            }),
            El({
              element: "div",
              className: "flex justify-between p-4",
              children: [
                El({
                  element: "p",
                  children: "Total",
                  className: "text-gray-600 text-lg font-normal",
                }),
                El({
                  element: "span",
                  children: [
                    "$",
                    data.cart.reduce((acc, item) => item.totalPr + acc, 0),
                  ],
                  className: "text-gray-700 font-bold text-lg",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className:
            "w-full flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
          children: [
            El({
              element: "button",
              className:
                " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
              onclick: () => {
                Router().navigate("/paymentMethod");
              },
              children: [
                El({
                  element: "span",
                  className: "self-center text-sm font-semibold",
                  children: "Continue to Payment",
                }),
                El({
                  element: "ion-icon",
                  name: "arrow-forward",
                  className: "text-lg font-bold",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export default checkout;

// El({
//   element: "div",
//   id: "checkout",
//   className: "w-screen h-screen flex flex-col overflow-y-hidden",
//   children: [
//     El({
//       element: "div",
//       id: "products-checkout",
//       className:
//         "absolute p-8 w-full top-[80px] flex flex-col  justify-center gap-4 overflow-y-scroll no-scrollbar pb-48",
//       children: data.cart.map((item) => {
//         return El({
//           element: "div",
//           id: `${item.id}`,
//           className: "flex",
//           children: [
//             El({
//               element: "div",
//               className:
//                 "w-[182px] h-[182px] flex bg-red-100 shadow-lg rounded-2xl",
//               children: [
//                 El({
//                   element: "img",
//                   className: "rounded-2xl w-full h-full",
//                   src: `${item.images}`,
//                 }),
//               ],
//             }),
//             El({
//               element: "div",
//               className: "flex flex-col p-2 justify-center gap-2",
//               children: [
//                 El({
//                   element: "div",
//                   className: "flex justify-between",
//                   children: [
//                     El({
//                       element: "p",
//                       className: "font-[600] text-[24px]",
//                       children: [`${item.title}`],
//                     }),
//                     El({
//                       element: "button",
//                       className: "",
//                       children: [
//                         El({
//                           element: "img",
//                           className: "w-6 h-6",
//                           src: "http://localhost:5173/src/images/icon/bin.svg",
//                         }),
//                       ],
//                     }),
//                   ],
//                 }),
//                 El({
//                   element: "div",
//                   className: "flex items-center ",
//                   children: [
//                     El({
//                       element: "div",
//                       className: "w-4 h-4 rounded-full bg-red-700 m-2",
//                       children: [],
//                     }),
//                     El({
//                       element: "p",
//                       className:
//                         "px-2 border-r border-gray-500 text-gray-700",
//                       children: [`red`],
//                     }),
//                     El({
//                       element: "p",
//                       className: "p-2  text-gray-700",
//                       children: [`Size = 42`],
//                     }),
//                   ],
//                 }),
//                 El({
//                   element: "div",
//                   className: "flex justify-between items-center",
//                   children: [
//                     El({
//                       element: "p",
//                       className: "font-[600] text-[18px]",
//                       children: [`$ ${item.price}`],
//                     }),
//                     El({
//                       element: "div",
//                       className:
//                         "bg-gray-200 flex justify-center items-center h-10 w-24 rounded-full gap-4",
//                       children: [
//                         El({
//                           element: "button",
//                           className: "font-[600] text-[26px]",
//                           children: [`−`],
//                           onclick: () => {
//                             cartReducebtnshoe(item, item.id);
//                           },
//                         }),
//                         El({
//                           element: "p",
//                           dataset: "",
//                           id: `cartcounterShoe${item.id}`,
//                           className: "font-[600] text-[18px]",
//                           children: `${item.quantity}`,
//                         }),
//                         El({
//                           element: "button",
//                           className: "font-[600] text-[26px]",
//                           children: [`+`],
//                           onclick: () => {
//                             cartIncreasebtnshoe(item, item.id);
//                           },
//                         }),
//                       ],
//                     }),
//                   ],
//                 }),
//               ],
//             }),
//           ],
//         });
//       }),
//     }),
//   ],
// });

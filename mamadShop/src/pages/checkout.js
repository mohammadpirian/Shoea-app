import { Router } from "../functions/router";
import { El } from "../library/el/El";
import {
  cartdata,
  checkoutdata,
  getDatauser,
} from "../functions/axios/transferdata";
import { cartReducebtnshoe } from "../functions/totalCounter/cartReducebtnshoe";
import { cartIncreasebtnshoe } from "../functions/totalCounter/cartIncreasebtnshoe";

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
      id: "checkout",
      className: "w-screen h-screen flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "div",
          id: "products-checkout",
          className:
            "absolute p-8 w-full top-[80px] flex flex-col  justify-center gap-4 overflow-y-scroll no-scrollbar pb-48",
          children: data.cart.map((item) => {
            return El({
              element: "div",
              id: `${item.id}`,
              className: "flex",
              children: [
                El({
                  element: "div",
                  className:
                    "w-[182px] h-[182px] flex bg-red-100 shadow-lg rounded-2xl",
                  children: [
                    El({
                      element: "img",
                      className: "rounded-2xl w-full h-full",
                      src: `${item.images}`,
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex flex-col p-2 justify-center gap-2",
                  children: [
                    El({
                      element: "div",
                      className: "flex justify-between",
                      children: [
                        El({
                          element: "p",
                          className: "font-[600] text-[24px]",
                          children: [`${item.title}`],
                        }),
                        El({
                          element: "button",
                          className: "",
                          children: [
                            El({
                              element: "img",
                              className: "w-6 h-6",
                              src: "http://localhost:5173/src/images/icon/bin.svg",
                            }),
                          ],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex items-center ",
                      children: [
                        El({
                          element: "div",
                          className: "w-4 h-4 rounded-full bg-red-700 m-2",
                          children: [],
                        }),
                        El({
                          element: "p",
                          className:
                            "px-2 border-r border-gray-500 text-gray-700",
                          children: [`red`],
                        }),
                        El({
                          element: "p",
                          className: "p-2  text-gray-700",
                          children: [`Size = 42`],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex justify-between items-center",
                      children: [
                        El({
                          element: "p",
                          className: "font-[600] text-[18px]",
                          children: [`$ ${item.price}`],
                        }),
                        El({
                          element: "div",
                          className:
                            "bg-gray-200 flex justify-center items-center h-10 w-24 rounded-full gap-4",
                          children: [
                            El({
                              element: "button",
                              className: "font-[600] text-[26px]",
                              children: [`−`],
                              onclick: () => {
                                cartReducebtnshoe(item, item.id);
                              },
                            }),
                            El({
                              element: "p",
                              dataset: "",
                              id: `cartcounterShoe${item.id}`,
                              className: "font-[600] text-[18px]",
                              children: `${item.quantity}`,
                            }),
                            El({
                              element: "button",
                              className: "font-[600] text-[26px]",
                              children: [`+`],
                              onclick: () => {
                                cartIncreasebtnshoe(item, item.id);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        }),
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export default checkout;

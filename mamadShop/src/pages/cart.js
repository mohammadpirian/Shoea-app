import { Router } from "../functions/router";
import { El } from "../library/el/El";
import { cartdata, getDatauser } from "../functions/axios/transferdata";
import { cartReducebtnshoe } from "../functions/totalCounter/cartReducebtnshoe";
import { cartIncreasebtnshoe } from "../functions/totalCounter/cartIncreasebtnshoe";
import { totalCart } from "../functions/totalCart";
import { datalogin } from "../functions/datalogin";

const cart = async () => {
  try {
    const { data } = await cartdata();
    console.log(data);
    setTimeout(() => {
      totalCart(data);
    }, 0);
    // console.log(data.cart);
    return El({
      element: "div",
      id: "cart",
      className: "w-screen h-screen flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "nav",
          id: "",
          className:
            "fixed flex w-full h-[80px] z-20 top-0 justify-between items-center px-[24px] bg-white",
          children: [
            El({
              element: "div",
              className: "flex",
              children: [
                El({
                  element: "img",
                  className: "w-[30px] ",
                  src: "./src/images/logo/logo-black.png",
                }),
                El({
                  element: "p",
                  className: "font-[600] text-[30px] ml-4 font-mono",
                  children: ["My Cart"],
                }),
              ],
            }),
            El({
              element: "button",
              className: "",
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/search.svg",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          id: "products-cart",
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
        El({
          element: "nav",

          className:
            "fixed flex w-full h-[110px] bottom-[65px] items-center justify-between px-[24px] rounded-t-3xl bg-white",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "w-[90px] ",
                  children: ["Total Price"],
                }),
                El({
                  element: "p",
                  id: "totalPriceCartPage",
                  className: "font-[700] text-[24px]",
                  children: ["$ 00"],
                }),
              ],
            }),
            El({
              element: "button",
              onclick: () => {
                Router().navigate("/checkout");
              },
              className:
                "w-[260px] h-[55px] shadow-2xl bg-black text-white rounded-full ",
              children: ["Checkout →"],
            }),
          ],
        }),
        El({
          element: "nav",
          id: "",
          className:
            "fixed flex w-full h-[66px] bottom-0 justify-between px-[48px] bg-white",
          children: [
            El({
              element: "button",
              id: "home-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                Router().navigate("/home");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/home.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Home",
                }),
              ],
            }),
            El({
              element: "button",
              id: "cart-btn",
              className: " flex flex-col justify-center items-center",
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/cart-select.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Cart",
                }),
              ],
            }),
            El({
              element: "button",
              id: "orders-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                Router().navigate("/orders");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/orders.svg",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Orders",
                }),
              ],
            }),
            El({
              element: "button",
              id: "Wallet-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                Router().navigate("/wallet");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/wallet.svg",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Wallet",
                }),
              ],
            }),
            El({
              element: "button",
              id: "profile-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                Router().navigate("/profile");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/profile.svg",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Profile",
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

export default cart;

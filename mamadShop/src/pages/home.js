import { Router } from "../functions/router";
import { El } from "../library/el/El";
import getproductone from "../functions/axios/getpriductone";
import getproduct from "../functions/axios/getproduct";

const home = async () => {
  try {
    const { data } = await getproductone(1);

    return El({
      element: "div",
      id: "home",
      className: "w-screen h-screen flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "nav",
          id: "top-nav",
          className:
            "fixed flex w-full h-[80px] top-0 justify-between items-center px-[24px] bg-white",
          children: [
            El({
              element: "div",
              className: "flex gap-[16px]",
              children: [
                El({
                  element: "button",
                  id: "",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[48px] h-[48px] rounded-full",
                      src: "./src/images/img/me.jpg",
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex flex-col gap-[4px]",
                  children: [
                    El({
                      element: "p",
                      className: "font-[500] text-[16px] text-[#757475]",
                      children: ["Good Morning👋"],
                    }),
                    El({
                      element: "p",
                      className: "font-[700] text-[16px]",
                      children: ["Mohammad Pirian"],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-[16px]",
              children: [
                El({
                  element: "button",
                  id: "notification-btn",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/images/icon/bell.svg",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "like-btn",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          id: "search-brand",
          className: "p-[24px] fixed w-full top-[80px] bg-white",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "input",
                  className:
                    "w-full h-[37px] bg-gray-100 border-none rounded-md px-8",
                  type: "text",
                  placeholder: "Search",
                }),
                El({
                  element: "img",
                  className: "absolute w-[18px] h-[18px] top-[34px] left-8",
                  src: "./src/images/icon/search.svg",
                }),
              ],
            }),
            El({
              element: "div",
              className: "mt-[22px]",
              children: [
                El({
                  element: "div",
                  className: "flex justify-between",
                  children: [
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/nike.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Nike"],
                        }),
                      ],
                    }),

                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/adidas.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Adidas"],
                        }),
                      ],
                    }),

                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/puma.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Puma"],
                        }),
                      ],
                    }),

                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/asics.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Asics"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            El({
              element: "div",
              className: "mt-[28px]",
              children: [
                El({
                  element: "div",
                  className: "flex justify-between",
                  children: [
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/reebok.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Reebok"],
                        }),
                      ],
                    }),

                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/newbalance.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["New Ba.."],
                        }),
                      ],
                    }),

                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/converse.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Converse"],
                        }),
                      ],
                    }),

                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./src/images/brand/more.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["More.."],
                        }),
                      ],
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "",
                  children: [],
                }),
              ],
            }),
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "div",
                  className: "flex justify-between mt-[19px] ",
                  children: [
                    El({
                      element: "p",
                      className: "font-[600] text-[20px]",
                      children: ["Most Popular"],
                    }),
                    El({
                      element: "button",
                      className: "font-[600] text-[16px]",
                      children: ["See All"],
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className:
                    "flex mt-[20px] gap-[12px] overflow-x-scroll no-scrollbar",
                  children: [
                    El({
                      element: "button",
                      className:
                        "h-[39px] py-[10px] px-[20px] bg-gray-700 text-white rounded-full flex justify-center items-center",
                      children: ["All"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["Nike"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["Adidias"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["Puma"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["Asics"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["Reebok"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px]  text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["NewBalance"],
                    }),
                    El({
                      element: "button",
                      className:
                        "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                      children: ["Converse"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          id: "products-home",
          className:
            "p-[24px] absolute w-full top-[480px] flex flex-wrap gap-4 overflow-y-scroll -z-10",
          children: [
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-[182px] h-[182px] bg-gray-100 rounded-2xl",
              children: [
                El({
                  element: "img",
                  className: "rounded-2xl",
                  src: `${data.images}`,
                }),
              ],
            }),
          ],
        }),
        El({
          element: "nav",
          id: "bottom-nav",
          className:
            "fixed flex w-full h-[66px] bottom-0 justify-between px-[48px] bg-white",
          children: [
            El({
              element: "button",
              id: "home-btn",
              className: " flex flex-col justify-center items-center",
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/home-select.svg",
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
              onclick: () => {
                Router().navigate("/cart");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./src/images/icon/cart.svg",
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

export default home;

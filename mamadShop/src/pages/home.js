import { Router } from "../functions/router";
import { El } from "../library/el/El";

const home = () => {
  return El({
    element: "div",
    id: "home",
    className: "w-screen h-screen flex flex-col overflow-y-hidden",
    children: [
      El({
        element: "nav",
        id: "",
        className:
          "fixed flex w-full h-[80px] top-0 justify-between items-center px-2",
        children: [
          El({
            element: "div",
            className: "flex gap-2",
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
                className: "flex flex-col gap-1",
                children: [
                  El({
                    element: "p",
                    className: "font-[400] text-[16px] text-[#757475]",
                    children: ["Good Morning👋"],
                  }),
                  El({
                    element: "p",
                    className: "font-[600] text-[16px]",
                    children: ["Mohammad Pirian"],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-2",
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
        className: "p-2 fixed w-full top-[80px]",
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
                className: "absolute w-[18px] h-[18px] top-[18px] left-4",
                src: "./src/images/icon/search.svg",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mt-4",
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
              El({
                element: "div",
                className: "",
                children: [],
              }),
            ],
          }),

          El({
            element: "div",
            className: "mt-4",
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
        ],
      }),
      El({
        element: "nav",
        id: "bottom-nav",
        className: "fixed flex w-full h-[66px] bottom-0 justify-between px-8",
        children: [
          El({
            element: "button",
            id: "home-btn",
            className: " flex flex-col justify-center items-center",
            children: [
              El({
                element: "img",
                className: "w-[24px] h-[24px]",
                src: "./src/images/icon/home.svg",
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
};

export default home;

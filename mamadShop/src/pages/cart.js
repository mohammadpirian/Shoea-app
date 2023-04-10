import { Router } from "../functions/router";
import { El } from "../library/el/El";

const cart = () => {
  return El({
    element: "div",
    id: "cart",
    className: "w-screen h-screen flex flex-col overflow-y-hidden",
    children: [
      El({
        element: "nav",
        id: "",
        className:
          "fixed flex w-full h-[80px] top-0 justify-between items-center px-[24px]",
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
        element: "nav",
        id: "",
        className:
          "fixed flex w-full h-[110px] bottom-[66px] items-center justify-between px-[24px] rounded-t-3xl",
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
                className: "font-[700] text-[24px]",
                children: ["$00"],
              }),
            ],
          }),
          El({
            element: "button",
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
          "fixed flex w-full h-[66px] bottom-0 justify-between px-[48px]",
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
};

export default cart;

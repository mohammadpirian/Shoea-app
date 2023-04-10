import { Router } from "../functions/router";
import { El } from "../library/el/El";
import getproductone from "../functions/axios/getpriductone";
import getproduct from "../functions/axios/getproduct";

const productModal = async () => {
  try {
    const { data } = await getproductone();

    return El({
      element: "div",
      id: "",
      className: "w-screen h-screen z-20 bg-white",
      children: [
        El({
          element: "div",
          className: "w-full h-2/6 ",
          children: [
            El({
              element: "img",
              className: "w-full h-full ",
              src: ``,
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full h-1/6 ",
          children: [
            El({
              element: "div",
              className: "w-full flex ",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: [``],
                }),
                El({
                  element: "button",
                  className: "",
                  children: [
                    El({
                      element: "img",
                      className: "",
                      src: "./src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-full flex ",
              children: [
                El({
                  element: "div",
                  className: "bg-gray-200",
                  children: [
                    El({
                      element: "p",
                      className: "",
                      children: ["5.371 sold"],
                    }),
                  ],
                }),
                El({
                  element: "img",
                  className: "",
                  src: "",
                }),
                El({
                  element: "p",
                  className: "",
                  children: ["(5,389 rewiews)"],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full h-2/6 ",
          children: [
            El({
              element: "p",
              className: "",
              children: ["Description"],
            }),
            El({
              element: "p",
              className: "",
              children: [
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni excepturi doloribus autem sed itaque officia possimus cum",
              ],
            }),
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: ["Size"],
                }),
                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "button",
                      className: "",
                      children: [`40`],
                    }),
                    El({
                      element: "button",
                      className: "",
                      children: [`41`],
                    }),
                    El({
                      element: "button",
                      className: "",
                      children: [`42`],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: ["Color"],
                }),
                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "button",
                      className: "",
                      children: [`white`],
                    }),
                    El({
                      element: "button",
                      className: "",
                      children: [`green`],
                    }),
                    El({
                      element: "button",
                      className: "",
                      children: [`black`],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: ["Quantity"],
                }),
                El({
                  element: "div",
                  className: "bg-gray-200",
                  children: [
                    El({
                      element: "button",
                      className: "",
                      children: [`-`],
                    }),
                    El({
                      element: "p",
                      className: "",
                      children: [`0`],
                    }),
                    El({
                      element: "button",
                      className: "",
                      children: [`+`],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full h-1/6 ",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: ["Total Price"],
                }),
                El({
                  element: "p",
                  className: "",
                  children: [`0`],
                }),
              ],
            }),
            El({
              element: "button",
              className: "bg-black",
              children: [`Add to Cart`],
            }),
          ],
        }),
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export default productModal;

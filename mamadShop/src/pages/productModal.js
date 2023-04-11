import { Router } from "../functions/router";
import { El } from "../library/el/El";
import getproductone from "../functions/axios/getpriductone";
import getproduct from "../functions/axios/getproduct";

const productModal = async (dataid) => {
  try {
    const { data } = await getproductone(dataid);
    console.log(data);

    return El({
      element: "div",
      id: "",
      className:
        "w-screen h-screen absolute flex flex-col justify-between bg-white divide-y divide-slate-200 overflow-y-hidden",
      children: [
        El({
          element: "div",
          className: "w-full h-92",
          children: [
            El({
              element: "img",
              className: "w-full  h-full cover",
              src: `${data.images}`,
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full ",
          children: [
            El({
              element: "div",
              className: "w-full flex justify-between px-6",
              children: [
                El({
                  element: "p",
                  className: "text-[32px] font-[700]",
                  children: [`${data.title}`],
                }),
                El({
                  element: "button",
                  className: "",
                  children: [
                    El({
                      element: "img",
                      className: "",
                      src: "http://localhost:5173/src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "w-full flex gap-2 px-6 py-6 items-center",
              children: [
                El({
                  element: "div",
                  className: "bg-gray-200 p-1 px-2 rounded-md",
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
                  className: "w-6",
                  src: "http://localhost:5173/src/images/icon/star.svg",
                }),
                El({
                  element: "p",
                  className: "",
                  children: ["4.3 (5,389 rewiews)"],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full px-6 flex flex-col gap-2 py-6",
          children: [
            El({
              element: "p",
              className: "font-[700] text-[18px]",
              children: ["Description"],
            }),
            El({
              element: "p",
              className: "",
              children: [
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni excepturi",
                El({
                  element: "p",
                  className: "font-[700]",
                  children: ["view more.."],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-32",
              children: [
                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[18px]",
                      children: ["Size"],
                    }),
                    El({
                      element: "div",
                      className: "flex gap-2",
                      children: [
                        El({
                          element: "button",
                          className: "border border-black w-8 h-8 rounded-full",
                          children: [`40`],
                        }),
                        El({
                          element: "button",
                          className: "border border-black w-8 h-8 rounded-full",
                          children: [`41`],
                        }),
                        El({
                          element: "button",
                          className: "border border-black w-8 h-8 rounded-full",
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
                      className: "font-[700] text-[18px]",
                      children: ["Color"],
                    }),
                    El({
                      element: "div",
                      className: "flex gap-2",
                      children: [
                        // data.color.map((item) => {
                        //   console.log(item);
                        //   return El({
                        //     element: "button",
                        //     className: `w-8 h-8 rounded-full bg-${item}-700`,
                        //     children: [``],
                        //   });
                        // }),
                        El({
                          element: "button",
                          className: "w-8 h-8 rounded-full bg-red-700",
                          children: [``],
                        }),
                        El({
                          element: "button",
                          className: "w-8 h-8 rounded-full bg-green-700",
                          children: [``],
                        }),
                        El({
                          element: "button",
                          className: "w-8 h-8 rounded-full bg-yellow-700",
                          children: [``],
                        }),
                        El({
                          element: "button",
                          className: "w-8 h-8 rounded-full bg-black",
                          children: [``],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-4",
              children: [
                El({
                  element: "p",
                  className: "font-[700] text-[18px]",
                  children: ["Quantity"],
                }),
                El({
                  element: "div",
                  className:
                    "bg-gray-200 flex justify-center p-1 w-20 rounded-full gap-4",
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
          className: "w-full px-6 flex justify-between py-5",
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
                  className: "font-[700] text-[28px]",
                  children: [`$ ${data.price}`],
                }),
              ],
            }),
            El({
              element: "button",
              className:
                "bg-black text-white h-16 w-60 flex justify-center items-center rounded-full",
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

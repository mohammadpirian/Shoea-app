import { Router } from "../functions/router";
import { El } from "../library/el/El";
import getproductone from "../functions/axios/getproductone";
import getproduct from "../functions/axios/getproduct";
import { totalbtnshoe } from "../functions/totalCounter/totalbtnshoe";
import { reducebtnshoe } from "../functions/totalCounter/reducebtnshoe";
import { postproductone } from "../functions/axios/transferdata";
import { getDatauser } from "../functions/axios/transferdata";

const productModal = async (dataid) => {
  try {
    const { data } = await getproductone(dataid);
    console.log(data);

    return El({
      element: "div",
      id: "",
      className:
        "w-screen h-screen absolute flex flex-col bg-white divide-y divide-slate-200 overflow-y-hidden",
      children: [
        El({
          element: "button",
          className: "absolute top-6 left-6",
          onclick: () => {
            history.back();
          },
          children: [
            El({
              element: "img",
              className: "w-6 h-4",
              src: "http://localhost:5173/src/images/icon/back.svg",
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full h-96 overflow-hidden",
          children: [
            El({
              element: "img",
              className: "w-full  h-full ",
              src: `${data.images}`,
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full flex flex-col py-6 gap-2",
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
              className: "w-full flex gap-2 px-6 items-center",
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
          className: "w-full px-6 flex flex-col gap-3 py-10",
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
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni excepturi ",
                El({
                  element: "span",
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
                        ...data.size.map((item) => {
                          // console.log(item);
                          return El({
                            element: "button",
                            className: `border border-black w-8 h-8 rounded-full`,
                            children: [`${item}`],
                          });
                        }),
                        // El({
                        //   element: "button",
                        //   className: "border border-black w-8 h-8 rounded-full",
                        //   children: [`40`],
                        // }),
                        // El({
                        //   element: "button",
                        //   className: "border border-black w-8 h-8 rounded-full",
                        //   children: [`41`],
                        // }),
                        // El({
                        //   element: "button",
                        //   className: "border border-black w-8 h-8 rounded-full",
                        //   children: [`42`],
                        // }),
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
                        ...data.color.map((item) => {
                          // console.log(item);
                          return El({
                            element: "button",
                            className: `w-8 h-8 rounded-full bg-${item}-700`,
                            children: [``],
                          });
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-4 mt-6 items-center",
              children: [
                El({
                  element: "p",
                  className: "font-[700] text-[18px]",
                  children: ["Quantity"],
                }),
                El({
                  element: "div",
                  className:
                    "bg-gray-200 flex justify-center items-center p-1 w-28 rounded-full gap-4",
                  children: [
                    El({
                      element: "button",
                      className: "font-[700] text-[26px]",
                      children: [`−`],
                      onclick: () => {
                        reducebtnshoe(data);
                      },
                    }),
                    El({
                      element: "p",
                      id: "counterShoe",
                      className: "font-[700] text-[18px]",
                      children: `1`,
                    }),
                    El({
                      element: "button",
                      className: "font-[700] text-[26px]",
                      children: [`+`],
                      onclick: () => {
                        totalbtnshoe(data);
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className: "w-full px-6 flex justify-between py-8",
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
                  id: "totalPriceShoe",
                  className: "font-[700] text-[28px]",
                  children: [`$ ${data.price}`],
                }),
              ],
            }),
            El({
              element: "button",
              className:
                "bg-black text-white h-16 w-60 flex justify-center items-center rounded-full",
              onclick: () => {
                getDatauser(1).then((res) => {
                  // console.log(res);
                  const clone = res.data;
                  // console.log(clone);
                  data.quantity = Number(
                    document.getElementById("counterShoe").firstChild.data
                  );
                  clone.cart.push(data);

                  postproductone(1, clone);
                });
              },
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

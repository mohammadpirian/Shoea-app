import { El } from "../../library/el/El";

const shoeCart2 = (item, variableItems) => {
  // console.log(item);
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "bg-white w-11/12 flex p-4 rounded-3xl mx-auto mb-4",
        children: [
          El({
            element: "div",
            children: [
              El({
                element: "div",
                className:
                  "w-24 h-24 bg-gray-100 rounded-3xl flex justify-center items-center",
                children: [
                  El({
                    element: "img",
                    src: `${item.images}`,
                    className: " rounded-3xl ",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col w-full gap-y-3 ml-4",
            children: [
              El({
                element: "div",
                className: "flex items-center w-full justify-between",
                children: [
                  El({
                    element: "h2",
                    children: [`${item.title}`],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex items-center gap-x-2",
                children: [
                  El({
                    element: "div",
                    children: "",
                    className: `w-4 h-4 rounded-full bg-${item.colorselect}-700`,
                  }),
                  El({
                    element: "span",
                    children: `${item.colorselect}`,
                    className: "text-xs text-gray-500",
                  }),
                  El({
                    element: "span",
                    children: "|",
                    className: "text-xs text-gray-500",
                  }),
                  El({
                    element: "span",
                    children: `Size = ${item.sizeselect}`,
                    className: "text-xs text-gray-500",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between items-center gap-x-10",
                children: [
                  El({
                    element: "span",
                    children: `$${item.price}`,
                  }),
                  variableItems,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default shoeCart2;

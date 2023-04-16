import { El } from "../../library/el/El";

const editButton = () => {
  return El({
    element: "button",
    className: "flex",
    children: [El({
      element: "ion-icon",
      name: "create",
      className: "text-3xl",
    })],
  });
};

export default editButton;

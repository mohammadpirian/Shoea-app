import { El } from "../../library/el/El";

const radioButton = () => {
  return El({
    element: "input",
    type: "radio",
    id: "black-radio",
    value: "",
    name: "colored-radio",
    className:
      "w-4 h-4 text-black bg-white border-2 border-black focus:ring-black focus:ring-2",
  });
};

export default radioButton;

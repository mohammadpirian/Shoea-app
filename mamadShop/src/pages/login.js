import { El } from "../library/el/El";
import { router } from "./../functions/router";

const login = () => {
  // const svg = `<svg fill="#212529" width="25px" height="25px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#212529" transform="rotate(0)" stroke-width="0.352"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"></path></g></svg>`;
  //   const htmlform = `
  // <div class="relative">
  //   <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  //     <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  //   </div>
  //   <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
  // </div>
  //     `;
  return El({
    element: "div",
    id: "login",
    className:
      "w-screen h-screen flex flex-col items-center overflow-x-hidden overflow-y-hidden",
    // innerHTML: htmlform,
    children: [
      El({
        element: "img",
        id: "img-login",
        className: "mt-24 h-[81px] w-[54px]",
        src: "./src/images/logo/logo-black.png",
        // onclick: () => {
        //   Router().navigate("/welcome");
        // },
      }),
      El({
        element: "p",
        id: "",
        className:
          "text-center mt-20 font-semibold text-[28px] w-[342px] h-[39px]",
        children: ["Login to Your Account"],
      }),
      El({
        element: "form",
        id: "loginForm",
        className:
          "p-4 mt-6 w-full flex flex-col items-center justify-center gap-4",
        children: [
          El({
            element: "input",
            className: "border-none h-[37px] rounded-lg bg-gray-100 w-full",
            type: "email",
            name: "email",
            placeholder: "Email",
          }),
          El({
            element: "input",
            className: "border-none h-[37px] rounded-lg bg-gray-100 w-full",
            type: "password",
            name: "password",
            placeholder: "Password",
          }),
          El({
            element: "label",
            className: "text-[16px] mt-2",
            children: [
              El({
                element: "input",
                className:
                  "border border-gray-300 rounded-sm w-[16px] h-[16px] bg-gray-100 mr-2",
                type: "checkbox",
                name: "checkbox",
              }),
              "Remember me",
            ],
          }),
          El({
            element: "button",
            type: "submit",
            className:
              "border-none h-[37px] rounded-full bg-black w-full text-white mt-20",
            children: "Sign In",
          }),
        ],
      }),
    ],
  });
};

export default login;

{
  /* <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
<div class="relative">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
</div> */
}

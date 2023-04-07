import Cookies from "js-cookie";

export let datalogin = () => {
  const loginFrm = document.getElementById("loginForm");
  loginFrm.addEventListener("submit", (e) => {
    console.log(loginFrm);
    e.preventDefault();
    let formLI = new FormData(loginFrm);
    // console.log(formLI);
    let dataLgn = Object.fromEntries(formLI);
    console.log(dataLgn);

    const userValidation = async (email, password) => {
      try {
        const response = await (
          await fetch(
            `http://localhost:3002/users?email=${email}&password=${password}`
          )
        ).json();
        const data = await response;
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    userValidation(dataLgn.email, dataLgn.password).then((data) => {
      console.log(dataLgn.email);
      if (data.length === 1) {
        Cookies.set("token", data[0].email, { expires: 1 });
        // location.reload();
        alert("Welcome to Mamad Shop 😎");
      }
    });
    loginFrm.reset();
  });
};

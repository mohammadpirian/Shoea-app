import "./src/index.css";
import { El } from "./src/library/el/El";
import { App } from "./src/App";
import { Router } from "./src/functions/router";

const root = document.getElementById("app");
root.appendChild(App());
Router().navigate("/");
// const datalist = JSON.parse(localStorage.getItem("datalist")) || [];
// const root = document.getElementById("app");
// root.appendChild(App());
// getData().then((data) => RenderUi(data));

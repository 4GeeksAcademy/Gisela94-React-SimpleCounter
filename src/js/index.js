import React from "react";
import ReactDOM from "react-dom/client"; 
import "../styles/index.css";
import {Counter} from "./component/Counter.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));

let counter = 0;

setInterval(function () {
  root.render(<Counter seconds={counter} />);
  counter++;
}, 1000);




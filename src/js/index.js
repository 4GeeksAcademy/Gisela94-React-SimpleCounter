//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx"

//render your react application
let counter = 0;
setInterval (function (){
    ReactDOM.render(<Counter seconds = {counter} />, document.querySelector("#app"));
    counter ++;
}, 1000)




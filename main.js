import "./main.scss";

import homepageBg from "./canvas/homepageBg";
import headerBg from "./canvas/headerBg";
import halfScreenBg from "./canvas/halfScreenBg";
import rightAndLeftBg from "./canvas/rightAndLeftBg";
import squareBg from "./canvas/squareBg";

let params1 = {
    target: "#hero-canvas",
    palette: ["#00ffc4", "#663399", "#ffc0cb"],
    bgColors: ["lightblue", "red"],
    pointColors: "white",
};

homepageBg(params1);

let params2 = {
    target: "#hero-canvas",
    bgColors: ["lightblue", "red"],
    pointColors: "white",
};

//headerBg(params2);
/*
 */

/*
document.querySelector("#hero-canvas").classList.add("half");
let params3 = {
  target: "#hero-canvas",
  palette: ["#00ffc4", "#663399", "#ffc0cb"],
  bgColors: ["lightblue", "red"],
  pointColors: "white",
};
halfScreenBg(params3);
*/
/*
document.querySelector("#hero-canvas");
let params4 = {
  target: "#hero-canvas",
  palette: ["#00ffc4", "#663399", "#ffc0cb"],
  bgColors: ["lightblue", "red"],
  pointColors: "white",
};
rightAndLeftBg(params4);
*/
/*
document.querySelector("#hero-canvas").classList.add("square");
let params4 = {
  target: "#hero-canvas",
  palette: ["#00ffc4", "#663399", "#ffc0cb"],
  bgColors: ["lightblue", "red"],
  pointColors: "white",
};
squareBg(params4);
*/

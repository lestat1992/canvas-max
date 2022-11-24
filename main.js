import "./main.scss";

import homepageBg from "./canvas/homepageBg";

let params1 = {
  target: "#hero-canvas",
  palette: ["#00ffc4", "#663399", "#ffc0cb"],
  bgColors: ["lightblue", "red"],
  pointColors: "white"
};

homepageBg(params1);

//import javascriptLogo from "./javascript.svg";
//import { setupCounter } from "./counter.js";

/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
*/
//setupCounter(document.querySelector('#counter'))

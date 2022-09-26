import CanvasSize from "./class/CanvasSize";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";

//ELEMENTO CANVAS
const canvas = document.querySelector("#hero-canvas");

//responsive units
let CSizes = new CanvasSize(canvas);
function vw(percentage) {
  return CSizes.vw(percentage);
}
function vh(percentage) {
  return CSizes.vh(percentage);
}
let client = CSizes.client;

//RENDER ##################
window.requestAnimationFrame(render);

function render() {
  //INITIAL SETTINGS
  const time = new Date();
  //Creating context
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = client.width;
  ctx.canvas.height = client.height;

  let newBackground = new GradientFullPage(ctx, {
    colorStart: "silver",
    colorEnd: "blue",
    length: 100,
    angle: 0,
  });

  newBackground.drawLinear();

  let Node1 = new Node(ctx, {
    stroke: vw(1),
    startPosition: [0, vh(80)],
    endPosition: [vw(30), vh(80) - vw(15)],
    headWidth: vw(15),
    headType: 1,
  });
  Node1.draw();

  window.requestAnimationFrame(render);
}
//########################

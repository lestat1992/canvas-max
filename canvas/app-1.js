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

let isAnimation = false;

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
    type: "linear",
    startPosition: {
      x: 0,
      y: 0,
    },
    endPosition: {
      x: vw(100),
      y: 0,
    },
    colorStep: [
      { position: 0.0, color: "lightblue" },
      { position: 1, color: "red" },
    ],
    /*
    length: 100,
    angle: 0,
    */
  });

  newBackground.drawLinear();

  let Node1 = new Node(ctx, {
    stroke: vw(0.5),
    pointSize: vw(1),
    startPosition: { x: 0, y: vh(80) },
    endPosition: { x: vw(30), y: vh(80) - vw(15) },
    headWidth: vw(15),
    headType: 1,
    borderRadious: vw(0.5),
  });
  Node1.drawAll();
  Node1.debug();

  if (isAnimation) {
    window.requestAnimationFrame(render);
  }
}
//########################

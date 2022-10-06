import CanvasSize from "./class/CanvasSize";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";

import getEase from "./functions/animation/getEase";

//ELEMENTO CANVAS
const canvas = document.querySelector("#hero-canvas");

let isAnimation = true;

function getX(params) {
  let distance = params.xTo - params.xFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.xFrom, distance, steps, params.type);
}

function getY(params) {
  let distance = params.yTo - params.yFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.yFrom, distance, steps, params.type);
}

//########################

let endPosition;

//RENDER ##################
let frame = 0;

window.requestAnimationFrame(render);

function render() {
  //INITIAL SETTINGS
  frame++;

  //responsive units #################
  let CSizes = new CanvasSize(canvas);
  function vw(percentage) {
    return CSizes.vw(percentage);
  }
  function vh(percentage) {
    return CSizes.vh(percentage);
  }
  let client = CSizes.client;

  //###################################
  //ANIMATABLE ########################
  let startPosition = { x: 0, y: vh(80) };

  endPosition = {
    //x: vw(30),
    x: getX({
      xTo: vw(50),
      xFrom: vw(40),
      frame: frame,
      frames: 400,
      type: "exponential",
    }),
    //vh(80) - vw(15),
    y: getY({
      yTo: vh(80) - vw(30),
      yFrom: vh(40) - vw(0),
      frame: frame,
      frames: 400,
      type: "exponential",
    }),
  };

  console.log(frame + " == " + 400);
  if (frame >= 400) {
    isAnimation = false;
  }

  //###################################

  //Creating context###################
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = client.width;
  ctx.canvas.height = client.height;
  //###################################

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
    startPosition: startPosition,
    endPosition: endPosition,
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

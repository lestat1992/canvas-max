import pointCordinates from "./functions/utility/pointCordinates";

import circle from "./functions/circle";

import CanvasInfo from "./class/CanvasInfo";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";
//import { getX, getY } from "./functions/animation/valueAnimated";

import Timelines from "./class/Timelines";
import Palette from "./class/Palette";

///////
let t = [];
//////

//PRE-RENDER ##################
const canvas = document.querySelector("#hero-canvas");

let frame = 0;
let isAnimation = true;

let CInfo = new CanvasInfo(canvas);
function vw(percentage) {
  return CInfo.vw(percentage);
}
function vh(percentage) {
  return CInfo.vh(percentage);
}
function toF(s) {
  return CInfo.toF(s);
}

let endPosition;
let timelineArray = [
  {
    name: "endPOsitionX",
    type: "x",
    showInDebug: true,
    keyfranes: [
      {
        value: vw(40),
        time: toF(0),
        type: "linear",
      },

      {
        value: vw(50),
        time: toF(15),
        type: "linear",
      },

      /*
      NON FUNZIONA
      {
        lobos: "YOLO1",
        from: vw(40),
        to: vw(50),
        time: toF(10),
        type: "linear",
      },
      {
        lobos: "YOLO2",
        from: vw(50),
        to: vw(80),
        time: toF(30),
        type: "linear",
      },
      */
    ],
  },
  {
    name: "endPOsitionY",
    type: "y",
    showInDebug: true,
    keyfranes: [
      {
        value: vw(20),
        time: toF(0),
        type: "linear",
      },

      {
        value: vw(60),
        time: toF(15),
        type: "linear",
      },

      /*
      NON FUNZIONA
      {
        lobos: "LOLLO1",
        from: vh(40) - vw(0),
        to: vh(80) - vw(30),
        time: toF(10),
        type: "linear",
      },
      {
        lobos: "LOLLO2",
        from: vh(80) - vw(30),
        to: vh(30),
        time: toF(30),
        type: "linear",
      },
      */
    ],
  },

  //OLD
  /*
      x: getX({
      xTo: vw(50),
      xFrom: vw(40),
      frame: frame,
      frames: toF(10),
      type: "linear",
    }),
    y: getY({
      yTo: vh(80) - vw(30),
      yFrom: vh(40) - vw(0),
      frame: frame,
      frames: toF(10),
      type: "linear",
    }),
    */
];

let Palette1 = new Palette(["#00ffc4", "#663399", "#ffc0cb"]);

let Timelines1 = new Timelines({
  timelineArray: timelineArray,
  showTimelineInDom: true,
});

window.requestAnimationFrame(render);

function render() {
  //INITIAL SETTINGS
  CInfo.getSize();
  frame++;
  Timelines1.updateFrame(frame);

  //responsive units #################

  let client = CInfo.client;

  //###################################
  //ANIMATABLE ########################
  let startPosition = { x: 0, y: vh(80) };

  endPosition = {
    //getValueFromSlug,

    x: Timelines1.getValueFromSlug("endPOsitionX"),
    y: Timelines1.getValueFromSlug("endPOsitionY"),
  };

  /*
  if (frame > toF(10)) {
    isAnimation = false;
  }
  */

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
  });

  newBackground.drawLinear();

  //circle bg .......................
  let rowPointN = 60;
  let encumbrancePoints = vw(100) / rowPointN;

  for (let iX = 0; iX < rowPointN; iX++) {
    for (let iY = 0; iY < rowPointN; iY++) {
      let radious = vw(0.05);
      if (iX % 2 == 0 && iY % 2 == 0) {
        radious = vw(0.1);
      }
      if (iX % 4 == 0 && iY % 4 == 0) {
        radious = vw(0.15);
      }
      let args1 = {
        x: iX * encumbrancePoints,
        y: iY * encumbrancePoints,
        radious: radious,
        color: "white",
      };
      circle(ctx, args1);
    }
  }

  //.................................

  Palette1.setSelectedColor("#663399");
  let paletteNode1 = Palette1.monocromathic([
    "#C0C0C0",
    "whitesmoke",
    "#E5E4E2",
    "#808080",
    "#646464",
  ]);

  let Node1 = new Node(ctx, {
    name: "node1",

    stroke: vw(0.5),
    pointSize: vw(1),
    startPosition: startPosition,
    endPosition: endPosition,
    headWidth: vw(15),
    headType: 1,
    borderRadious: vw(0.5),

    heightTabHeader: vw(1.5),
    paddingVerical: vw(1),
    paddingHorizontal: vw(1),

    placeholderSize: vw(1),

    //
    lineColor: paletteNode1[0].new,
    placeHoldersColor: paletteNode1[1].new,
    hancorColor: paletteNode1[2].new,
    tabHeaderColor: paletteNode1[3].new,
    tabBodyColor: paletteNode1[4].new,
  });
  Node1.drawAll();
  Node1.debug();

  //debug
  pointCordinates(ctx, {
    x: vw(50),
    y: vh(80) - vw(30),
    color: "#66ff99",
  });

  //debug
  pointCordinates(ctx, {
    x: vw(40),
    y: vh(40) - vw(0),
    color: "#66ffff",
  });

  if (isAnimation) {
    window.requestAnimationFrame(render);
  }
}
//########################

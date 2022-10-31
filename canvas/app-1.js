import pointCordinates from "./functions/utility/pointCordinates";

import circle from "./functions/circle";

import CanvasInfo from "./class/CanvasInfo";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";

import Timelines from "./class/Timelines";
import Palette from "./class/Palette";

///////
let t = [];
//////

//PRE-RENDER ##################
const canvas = document.querySelector("#hero-canvas");

let isAnimation = false;

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
let endPosition2;
let endPosition3;
let timelineArray = [
  {
    name: "endPOsitionX",
    type: "x",
    keyframes: [
      {
        value: vw(7),
        time: toF(0),
        type: "linear",
      },

      {
        value: 600, //vw(50)
        time: toF(10),
        type: "linear",
      },
    ],
  },
  {
    name: "endPOsitionY",
    type: "y",
    showInDebug: true,
    keyframes: [
      {
        value: vw(30),
        time: toF(0),
        type: "linear",
      },

      {
        value: 600,
        time: toF(10),
        type: "linear",
      },
    ],
  },
  //------------------------
  {
    name: "endPOsitionX2",
    type: "x",
    showInDebug: true,
    keyframes: [
      {
        value: vw(9),
        time: toF(0),
        type: "linear",
      },

      {
        value: 600, //vw(50)
        time: toF(10),
        type: "linear",
      },
    ],
  },
  {
    name: "endPOsitionY2",
    type: "y",
    showInDebug: true,
    keyframes: [
      {
        value: vw(15),
        time: toF(0),
        type: "linear",
      },

      {
        value: 600,
        time: toF(10),
        type: "linear",
      },
    ],
  },
  //------------------------
  {
    name: "endPOsitionX3",
    type: "x",
    showInDebug: true,
    keyframes: [
      {
        value: vw(25),
        time: toF(0),
        type: "linear",
      },

      {
        value: 600, //vw(50)
        time: toF(10),
        type: "linear",
      },
    ],
  },
  {
    name: "endPOsitionY3",
    type: "y",
    showInDebug: true,
    keyframes: [
      {
        value: vw(15),
        time: toF(0),
        type: "linear",
      },

      {
        value: 600,
        time: toF(10),
        type: "linear",
      },
    ],
  },
];

let Palette1 = new Palette(["#00ffc4", "#663399", "#ffc0cb"]);

let Timelines1 = new Timelines({
  timelineArray: timelineArray,
  showTimelineInDom: false,
});

/*
  render Function
*/
function render() {
  //INITIAL SETTINGS
  CInfo.getSize();
  Timelines1.updateFrame();

  //responsive units #################

  let client = CInfo.client;

  //###################################
  //ANIMATABLE ########################
  let startPosition = { x: 0, y: vh(75) };

  endPosition = {
    x: Timelines1.getValueFromSlug("endPOsitionX"),
    y: Timelines1.getValueFromSlug("endPOsitionY"),
  };

  endPosition2 = {
    x: Timelines1.getValueFromSlug("endPOsitionX2"),
    y: Timelines1.getValueFromSlug("endPOsitionY2"),
  };

  endPosition3 = {
    x: Timelines1.getValueFromSlug("endPOsitionX3"),
    y: Timelines1.getValueFromSlug("endPOsitionY3"),
  };

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

  let defaultPropsNode = {
    stroke: vw(0.5),
    pointSize: vw(1),
    borderRadious: vw(0.5),
    heightTabHeader: vw(1.5),
    paddingVerical: vw(1),
    paddingHorizontal: vw(1),
    placeholderSize: vw(1),
    lineColor: paletteNode1[0].new,
    placeHoldersColor: paletteNode1[1].new,
    hancorColor: paletteNode1[2].new,
    tabHeaderColor: paletteNode1[3].new,
    tabBodyColor: paletteNode1[4].new,
  };

  let Node1 = new Node(ctx, {
    ...defaultPropsNode,
    ...{
      name: "node1",
      startPosition: startPosition,
      endPosition: endPosition,
      headWidth: vw(15),
      headType: 2,
    },
  });
  Node1.drawAll();

  let Node2 = new Node(ctx, {
    ...defaultPropsNode,
    ...{
      name: "node2",
      startPosition: Node1.getExitPoint(),
      endPosition: endPosition2,
      headWidth: vw(15),
      headType: 3,
    },
  }).drawAll();

  let Node3 = new Node(ctx, {
    ...defaultPropsNode,
    ...{
      name: "node3",
      startPosition: Node1.getExitPoint(),
      endPosition: endPosition3,
      headWidth: vw(15),
      headType: 1,
    },
  }).drawAll();

  //debug
  pointCordinates(ctx, {
    x: 600,
    y: 500,
    color: "#66ff99",
  });

  //debug
  pointCordinates(ctx, {
    x: 500,
    y: 800,
    color: "#66ffff",
  });
}

if (isAnimation) {
  function renderAnimated() {
    setTimeout(function () {
      requestAnimationFrame(renderAnimated);

      render();
    }, 1000 / CInfo.fps);
  }
  renderAnimated();
} else {
  render();
}

//########################

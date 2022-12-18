import pointCordinates from "./functions/utility/pointCordinates";

import CircleBg from "./class/CircleBg";
import CanvasInfo from "./class/CanvasInfo";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";

import Timelines from "./class/Timelines";
import Palette from "./class/Palette";

import randomNum from "./functions/utility/randomNum";

function rightAndLeftBg(params) {
    if (document.querySelector(params.target)) {
        function runCanvas() {
            ///////
            let t = [];
            //////

            //PRE-RENDER ##################
            const canvas = document.querySelector(params.target);

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

            //(ANIM01)###############

            let timerTime = toF(0.8); //offset time
            let offsetBase = vw(0.5); //offset value

            let easinArray = [
                "static",
                "cubic",
                "quartic",
                "quintic",
                "sinusoidal",
                "exponential",
                "none",
            ];
            let schemeTimeRandom = [0, 0.2, 0.3, 0.5, 0.4, 1, 3, 4]; //variazion time su offset
            let variationValue = [0, 0.2, 0.5, 0.8, 0.4]; //variazion value su offset

            //#######################

            let endPosition;
            let endPosition2;
            let endPosition3;
            let endPosition4;
            let endPosition5; //
            let endPosition6;
            let endPosition7;

            let endPosition_r;
            let endPosition2_r;
            let endPosition3_r;
            let endPosition4_r;
            let endPosition5_r; //
            let endPosition6_r;
            let endPosition7_r;

            let timelineArray = [
                //L ####################################
                {
                    name: "endPOsitionX",
                    type: "x",
                    keyframes: [
                        {
                            value: vw(7),
                            time: toF(0),
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
                            value: vw(25),
                            time: toF(0),
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
                            value: vw(8),
                            time: toF(0),
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
                    ],
                },
                {
                    name: "endPOsitionY3",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(10),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX4",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(20),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY4",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(30),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------/////##
                {
                    name: "endPOsitionX5",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(10),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY5",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(40),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX6",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(20),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY6",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(20),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX7",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(5),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY7",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(8),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },

                //R ####################################
                {
                    name: "endPOsitionX_r",
                    type: "x",
                    keyframes: [
                        {
                            value: vw(93),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(25),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX2_r",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(91),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY2_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(5),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX3_r",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(75),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY3_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(10),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX4_r",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(80),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY4_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(30),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },

                //------------------------//###
                {
                    name: "endPOsitionX5_r",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(65),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY5_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(41),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX6_r",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(95),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY6_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(40),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                //------------------------
                {
                    name: "endPOsitionX7_r",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(85),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY7_r",
                    type: "y",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(12),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
            ];

            let Palette1 = new Palette(params.palette);

            function addKeyframesRandomly() {
                //rsultArray = [];
                let cloneOriginaArray = JSON.parse(
                    JSON.stringify(timelineArray)
                ); //JSON.parse(JSON.stringify(timelineArray));
                cloneOriginaArray.forEach((el1, index) => {
                    let partToAdd = [];

                    let original = timelineArray[index].keyframes[0];
                    partToAdd.push(original);

                    for (let index = 1; index <= 10; index++) {
                        let newKeyframe;
                        if (index == 10) {
                            newKeyframe = JSON.parse(JSON.stringify(original));
                            newKeyframe["time"] = timerTime * index;
                        } else {
                            newKeyframe = {
                                value: randomNum(
                                    original.value - offsetBase,
                                    original.value +
                                        offsetBase +
                                        vw(
                                            variationValue[
                                                randomNum(
                                                    0,
                                                    variationValue.length
                                                )
                                            ]
                                        )
                                ),
                                time:
                                    timerTime * index -
                                    toF(
                                        schemeTimeRandom[
                                            randomNum(
                                                0,
                                                schemeTimeRandom.length
                                            )
                                        ]
                                    ),
                                type: easinArray[
                                    randomNum(0, easinArray.length)
                                ],
                            };
                        }
                        partToAdd.push(newKeyframe);
                    }
                    el1["keyframes"] = partToAdd;
                });

                return cloneOriginaArray;
            }

            let Timelines1 = new Timelines({
                timelineArray: addKeyframesRandomly(),
                showTimelineInDom: false,
            });

            console.log(Timelines1.timelineArray);

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

                if (Timelines1.frame == 1) {
                    Timelines1.seTtimelineArray(addKeyframesRandomly());
                }

                //ANIMATABLE ########################
                let startPosition = { x: 0, y: vh(75) };

                let startPosition_r = { x: vw(150), y: vh(90) };
                let startPosition2_r = { x: vw(50), y: vh(180) };

                //L ################################################
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

                endPosition4 = {
                    x: Timelines1.getValueFromSlug("endPOsitionX4"),
                    y: Timelines1.getValueFromSlug("endPOsitionY4"),
                };

                endPosition5 = {
                    x: Timelines1.getValueFromSlug("endPOsitionX5"),
                    y: Timelines1.getValueFromSlug("endPOsitionY5"),
                };

                endPosition6 = {
                    x: Timelines1.getValueFromSlug("endPOsitionX6"),
                    y: Timelines1.getValueFromSlug("endPOsitionY6"),
                };

                endPosition7 = {
                    x: Timelines1.getValueFromSlug("endPOsitionX7"),
                    y: Timelines1.getValueFromSlug("endPOsitionY7"),
                };
                //R ################################################

                endPosition_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY_r"),
                };

                endPosition2_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX2_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY2_r"),
                };

                endPosition3_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX3_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY3_r"),
                };

                endPosition4_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX4_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY4_r"),
                };

                endPosition5_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX5_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY5_r"),
                };

                endPosition6_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX6_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY6_r"),
                };

                endPosition7_r = {
                    x: Timelines1.getValueFromSlug("endPOsitionX7_r"),
                    y: Timelines1.getValueFromSlug("endPOsitionY7_r"),
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
                        { position: 0.0, color: params.bgColors[0] },
                        { position: 1, color: params.bgColors[1] },
                    ],
                });

                newBackground.drawLinear();

                //circle bg .......................
                let CircleBg1 = new CircleBg(ctx, {
                    widthBg: vw(100),
                    rowPointN: 60,
                    radious1: vw(0.15),
                    radious2: vw(0.1),
                    radious3: vw(0.05),
                    colorFill: "white",
                });
                CircleBg1.circleBgRect();
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
                    stroke: vw(0.25),
                    pointSize: vw(0.5),
                    borderRadious: vw(0.25),
                    heightTabHeader: vw(0.75),
                    paddingVerical: vw(0.5),
                    paddingHorizontal: vw(0.5),
                    placeholderSize: vw(0.5),
                    lineColor: paletteNode1[0].new,
                    placeHoldersColor: paletteNode1[1].new,
                    hancorColor: paletteNode1[2].new,
                    tabHeaderColor: paletteNode1[3].new,
                    tabBodyColor: paletteNode1[4].new,
                };

                //L ########################################
                let Node1 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node1",
                        startPosition: startPosition,
                        endPosition: endPosition,
                        headWidth: vw(7.7),
                        headType: 4,
                    },
                });

                let Node2 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node2",
                        startPosition: Node1.getExitPoint(),
                        endPosition: endPosition2,
                        headWidth: vw(7.7),
                        headType: 3,
                    },
                });

                let Node3 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node3",
                        startPosition: Node1.getExitPoint(),
                        endPosition: endPosition3,
                        headWidth: vw(7.7),
                        headType: 1,
                    },
                });

                let Node4 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node4",
                        startPosition: endPosition,
                        endPosition: endPosition4,
                        headWidth: vw(7.7),
                        headType: 2,
                        reverseEntry: true,
                    },
                });

                let Node5 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node5",
                        startPosition: startPosition2_r,
                        endPosition: endPosition5,
                        headWidth: vw(7.7),
                        headType: 4,
                    },
                });

                let Node6 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node6",
                        startPosition: endPosition4,
                        endPosition: endPosition6,
                        headWidth: vw(7.7),
                        headType: 1,
                        reverseEntry: true,
                    },
                });

                let Node7 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node7",
                        startPosition: Node2.getExitPoint(),
                        endPosition: endPosition7,
                        headWidth: vw(7.7),
                        headType: 4,
                    },
                });

                let line = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line",
                        startPosition: startPosition2_r,
                        endPosition: {
                            x: endPosition4.x,
                            y: Node4.headHeight + endPosition4.y,
                        },
                        headWidth: vw(7.7),
                        headType: 2,
                    },
                });

                let line2 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line",
                        startPosition: Node5.getExitPoint(),
                        endPosition: endPosition,
                        headWidth: vw(7.7),
                        headType: 2,
                    },
                });

                //R ########################################
                let Node1_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node1_r",
                        startPosition: startPosition_r,
                        endPosition: endPosition_r,
                        headWidth: vw(7.7),
                        headType: 4,
                    },
                });

                let Node2_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node2_r",
                        startPosition: Node1_r.getExitPoint(),
                        endPosition: endPosition2_r,
                        headWidth: vw(7.7),
                        headType: 3,
                    },
                });

                let Node4_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node4_r",
                        startPosition: endPosition_r,
                        endPosition: endPosition4_r,
                        headWidth: vw(7.7),
                        headType: 2,
                        reverseEntry: true,
                    },
                });

                let Node3_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node3_r",
                        startPosition: Node4_r.getExitPoint(),
                        endPosition: endPosition3_r,
                        headWidth: vw(7.7),
                        headType: 1,
                    },
                });

                let Node5_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node5_r",
                        startPosition: {
                            x: endPosition4_r.x,
                            y: endPosition4_r.y + Node4_r.headHeight,
                        },
                        endPosition: endPosition5_r,
                        headWidth: vw(7.7),
                        headType: 1,
                        reverseEntry: true,
                    },
                });

                let Node6_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node6_r",
                        startPosition: endPosition_r,
                        endPosition: endPosition6_r,
                        headWidth: vw(7.7),
                        headType: 1,
                        reverseEntry: true,
                    },
                });

                let Node7_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node7_r",
                        startPosition: endPosition2_r,
                        endPosition: endPosition7_r,
                        headWidth: vw(7.7),
                        headType: 3,
                        reverseEntry: true,
                    },
                });

                //line
                let line_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line_r",
                        startPosition: startPosition2_r,
                        endPosition: {
                            x: endPosition4_r.x,
                            y: Node4_r.headHeight + endPosition4_r.y,
                        },
                        headWidth: vw(7.7),
                        headType: 2,
                    },
                });

                let line_r2 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line_r",
                        startPosition: endPosition7_r,
                        endPosition: endPosition3_r,
                        headWidth: vw(7.7),
                        headType: 2,
                    },
                });

                line.line();
                line2.line();
                line_r.line();
                line_r2.line();

                Node7.drawAll({ exitPoint: false });
                Node6.drawAll({ exitPoint: false });

                Node5.drawAll();
                Node4.drawAll();
                Node3.drawAll({ exitPoint: false });
                Node2.drawAll();
                Node1.drawAll();

                Node7_r.drawAll({ entryPoint: false });
                Node6_r.drawAll({ entryPoint: false });
                Node5_r.drawAll({ entryPoint: false });

                Node2_r.drawAll({ exitPoint: false });
                Node3_r.drawAll({ exitPoint: false });
                Node4_r.drawAll();
                Node1_r.drawAll();
            }

            if (isAnimation) {
                function renderAnimated() {
                    const timeout = setTimeout(function () {
                        requestAnimationFrame(renderAnimated);

                        render();
                    }, 1000 / CInfo.fps);

                    ["orientationchange", "resize"].forEach((handler) => {
                        window.addEventListener(handler, () => {
                            console.log("eo");
                            clearTimeout(timeout);
                        });
                    });
                }
                renderAnimated();
            } else {
                render();
            }
        }
        runCanvas();

        function resizedw() {
            console.log("APOLLO JONSON");
            runCanvas();
        }
        var doit;
        ["orientationchange", "resize"].forEach((handler) => {
            window.addEventListener(handler, () => {
                clearTimeout(doit);
                doit = setTimeout(resizedw, 100);
            });
        });
    }
}

export default rightAndLeftBg;

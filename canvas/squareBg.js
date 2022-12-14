import pointCordinates from "./functions/utility/pointCordinates";

import CircleBg from "./class/CircleBg";
import CanvasInfo from "./class/CanvasInfo";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";

import Timelines from "./class/Timelines";
import Palette from "./class/Palette";

import randomNum from "./functions/utility/randomNum";

function squareBg(params) {
    if (document.querySelector(params.target)) {
        function runCanvas() {
            ///////
            let t = [];
            //////

            //PRE-RENDER ##################
            const canvas = document.querySelector(params.target);

            let isAnimation;
            if (params.isAnimated === false) {
                isAnimation = params.isAnimated;
            } else {
                isAnimation = true;
            }

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
            let variationValue = [0, 0.4, 1, 1.6, 0.8]; //variazion value su offset

            //#######################

            let endPosition;
            let endPosition2;
            let endPosition3;
            let endPosition4;
            let endPosition5; //
            let endPosition6;
            let endPosition7;
            let endPosition8;

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
                            value: vw(75),
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
                            value: vw(80),
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
                            value: vw(90),
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
                            value: vw(65),
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
                            value: vw(65),
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
                            value: vw(65),
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
                            value: vw(75),
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
                            value: vw(90),
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
                            value: vw(95),
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
                            value: vw(45),
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
                            value: vw(80),
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
                            value: vw(25),
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
                            value: vw(70),
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
                            value: vw(85),
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
                            value: vw(45),
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
                            value: vw(75),
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
                            value: vw(15),
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
                            value: vw(20),
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
                            value: vw(35),
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
                            value: vw(40),
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
                            value: vw(55),
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
                            value: vw(40),
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
                            value: vw(15),
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
                            value: vw(60),
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
                            value: vw(30),
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
                            value: vw(40),
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
                            value: vw(35),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },

                //------------------------
                {
                    name: "endPOsitionX8",
                    type: "x",
                    showInDebug: true,
                    keyframes: [
                        {
                            value: vw(15),
                            time: toF(0),
                            type: "linear",
                        },
                    ],
                },
                {
                    name: "endPOsitionY8",
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
                let startPosition = { x: vw(300), y: vh(300) };

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

                endPosition8 = {
                    x: Timelines1.getValueFromSlug("endPOsitionX8"),
                    y: Timelines1.getValueFromSlug("endPOsitionY8"),
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
                    rowPointN: 30,
                    radious1: vw(0.3),
                    radious2: vw(0.2),
                    radious3: vw(0.1),
                    colorFill: params.pointColors,
                });
                CircleBg1.circleBgRect();
                //.................................
                Palette1.setSelectedColor(params.palette[0]);

                let paletteNode1;

                if (params.fillNodes) {
                    paletteNode1 = [
                        { new: params.palette[0] },
                        { new: params.palette[0] },
                        { new: params.palette[0] },
                        { new: params.palette[0] },
                        { new: params.palette[0] },
                    ];
                } else {
                    paletteNode1 = Palette1.monocromathic([
                        "#C0C0C0",
                        "whitesmoke",
                        "#E5E4E2",
                        "#808080",
                        "#646464",
                    ]);
                }

                let defaultPropsNode = {
                    stroke: vw(0.5),
                    pointSize: vw(1),
                    borderRadious: vw(0.5),
                    heightTabHeader: vw(1.25),
                    paddingVerical: vw(1),
                    paddingHorizontal: vw(1),
                    placeholderSize: vw(1),
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
                        headWidth: vw(15),
                        headType: 4,
                    },
                });

                let Node2 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node2",
                        startPosition: Node1.getExitPoint(),
                        endPosition: endPosition2,
                        headWidth: vw(15),
                        headType: 3,
                    },
                });

                let Node3 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node3",
                        startPosition: Node1.getExitPoint(),
                        endPosition: endPosition3,
                        headWidth: vw(15),
                        headType: 1,
                    },
                });

                let Node4 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node4",
                        startPosition: endPosition,
                        endPosition: endPosition4,
                        headWidth: vw(15),
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
                        headWidth: vw(15),
                        headType: 4,
                    },
                });

                let Node6 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node6",
                        startPosition: endPosition4,
                        endPosition: endPosition6,
                        headWidth: vw(15),
                        headType: 1,
                    },
                });

                let Node7 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node7",
                        startPosition: Node6.getExitPoint(),
                        endPosition: endPosition7,
                        headWidth: vw(15),
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
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line2 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line",
                        startPosition: Node5.getExitPoint(),
                        endPosition: endPosition6,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line3 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line",
                        startPosition: {
                            x: vw(-100),
                            y: vw(80),
                        },
                        endPosition: endPosition7,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line5 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line",
                        startPosition: {
                            x: vw(-100),
                            y: vw(80),
                        },
                        endPosition: endPosition7,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                //R ########################################
                let Node1_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node1_r",
                        startPosition: Node1.getExitPoint(),
                        endPosition: endPosition_r,
                        headWidth: vw(15),
                        headType: 4,
                    },
                });

                let Node2_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node2_r",
                        startPosition: Node1_r.getExitPoint(),
                        endPosition: endPosition2_r,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let Node4_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node4_r",
                        startPosition: Node6.getExitPoint(),
                        endPosition: endPosition4_r,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let Node3_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node3_r",
                        startPosition: Node4_r.getExitPoint(),
                        endPosition: endPosition3_r,
                        headWidth: vw(15),
                        headType: 1,
                    },
                });

                let Node6_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node6_r",
                        startPosition: Node1_r.getExitPoint(),
                        endPosition: endPosition6_r,
                        headWidth: vw(15),
                        headType: 1,
                    },
                });

                let Node7_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node7_r",
                        startPosition: Node4_r.getExitPoint(),
                        endPosition: endPosition7_r,
                        headWidth: vw(15),
                        headType: 3,
                    },
                });

                //line
                let line_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line_r",
                        startPosition: startPosition2_r,
                        endPosition: {
                            x: endPosition6.x,
                            y: endPosition6.y,
                        },
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line_r2 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line_r",
                        startPosition: endPosition3_r,
                        endPosition: Node5.getExitPoint(),
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line4 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line",
                        startPosition: Node7.getExitPoint(),
                        endPosition: endPosition4_r,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let Node5_r = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node5_r",
                        startPosition: Node7_r.getExitPoint(),
                        endPosition: endPosition5_r,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let Node8 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "node8",
                        startPosition: Node3_r.getExitPoint(),
                        endPosition: endPosition8,
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line6 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line6",
                        startPosition: Node8.getExitPoint(),
                        endPosition: {
                            x: vw(-100),
                            y: vw(-100),
                        },
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                let line7 = new Node(ctx, {
                    ...defaultPropsNode,
                    ...{
                        name: "line7",
                        startPosition: Node2_r.getExitPoint(),
                        endPosition: {
                            x: vw(-100),
                            y: vw(-100),
                        },
                        headWidth: vw(15),
                        headType: 2,
                    },
                });

                line7.line();
                line6.line();

                line3.line();
                line4.line();
                line5.line();
                /* */
                line.line();
                line2.line();
                line_r.line();
                line_r2.line();

                Node7.drawAll({ line: false });

                Node5.drawAll();

                Node3.drawAll({ exitPoint: false });
                Node2.drawAll({ exitPoint: false });

                Node6_r.drawAll({ exitPoint: false });
                Node5_r.drawAll({ exitPoint: false });

                Node2_r.drawAll();

                Node1_r.drawAll();

                Node8.drawAll();
                Node7_r.drawAll();
                Node3_r.drawAll();
                Node4_r.drawAll();
                Node6.drawAll();
                Node4.drawAll();
                Node1.drawAll();
            }

            if (isAnimation) {
                function renderAnimated() {
                    const timeout = setTimeout(function () {
                        requestAnimationFrame(renderAnimated);

                        render();
                    }, 1000 / CInfo.fps);

                    ["orientationchange", "resize", "fullscreenchange"].forEach(
                        (handler) => {
                            window.addEventListener(handler, () => {
                                clearTimeout(timeout);
                            });
                        }
                    );
                }
                renderAnimated();
            } else {
                render();
            }
        }

        runCanvas();

        let doit;

        function resizedw() {
            // Haven't resized in 100ms!
            setTimeout(function () {
                runCanvas();
            }, 100);
        }

        ["orientationchange", "resize", "fullscreenchange"].forEach(
            (handler) => {
                window.addEventListener(handler, () => {
                    clearTimeout(doit);
                    doit = setTimeout(resizedw, 200);
                });
            }
        );
    }
}

export default squareBg;

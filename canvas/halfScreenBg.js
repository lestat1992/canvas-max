import pointCordinates from "./functions/utility/pointCordinates";

import CircleBg from "./class/CircleBg";
import CanvasInfo from "./class/CanvasInfo";
import GradientFullPage from "./class/GradientFullPage";
import Node from "./class/Node";

import Timelines from "./class/Timelines";
import Palette from "./class/Palette";

import randomNum from "./functions/utility/randomNumber";

/*
    to do rimetti isAnimation

*/

function halfScreenBg(params) {
    ///////
    let t = [];
    //////

    //PRE-RENDER ##################
    let canvas = document.querySelector(params.target);

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
    let offsetBase = vw(1); //offset value

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
    let endPosition5;
    let endPosition6;
    let endPosition7;
    let endPosition8;
    let endPosition9; //fake non togliere
    let endPosition10; //fake non togliere
    let timelineArray = [
        {
            name: "endPOsitionX",
            type: "x",
            keyframes: [
                {
                    value: vw(65),
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
                    value: vw(100),
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
                    value: vw(30),
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
                    value: vw(70),
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
                    value: vw(80),
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
                    value: vw(70),
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
                    value: vw(85),
                    time: toF(0),
                    type: "linear",
                },
            ],
        },
        //------------------------
        {
            name: "endPOsitionX5",
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
            name: "endPOsitionY5",
            type: "y",
            showInDebug: true,
            keyframes: [
                {
                    value: vw(50),
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
                    value: vw(100),
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
                    value: vw(60),
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
                    value: vw(20),
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
                    value: vw(25),
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
                    value: vw(50),
                    time: toF(0),
                    type: "linear",
                },
            ],
        },
        //------------------------
        //FAKE
        {
            name: "endPOsitionX9",
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
            name: "endPOsitionY9",
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
        //FAKE
        {
            name: "endPOsitionX10",
            type: "x",
            showInDebug: true,
            keyframes: [
                {
                    value: vw(-20),
                    time: toF(0),
                    type: "linear",
                },
            ],
        },
        {
            name: "endPOsitionY10",
            type: "y",
            showInDebug: true,
            keyframes: [
                {
                    value: vw(-20),
                    time: toF(0),
                    type: "linear",
                },
            ],
        },
    ];

    let Palette1 = new Palette(params.palette);

    function addKeyframesRandomly() {
        //rsultArray = [];
        let cloneOriginaArray = JSON.parse(JSON.stringify(timelineArray)); //JSON.parse(JSON.stringify(timelineArray));
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
                                        randomNum(0, variationValue.length)
                                    ]
                                )
                        ),
                        time:
                            timerTime * index -
                            toF(
                                schemeTimeRandom[
                                    randomNum(0, schemeTimeRandom.length)
                                ]
                            ),
                        type: easinArray[randomNum(0, easinArray.length)],
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

        //Creating context###################
        if (document.querySelector(params.target)) {
            const ctx = canvas.getContext("2d");
            ctx.canvas.width = client.width;
            ctx.canvas.height = client.height;
            //###################################
            //###################################

            if (Timelines1.frame == 1) {
                Timelines1.seTtimelineArray(addKeyframesRandomly());
            }

            //ANIMATABLE ########################
            let startPosition = { x: vw(50), y: vh(100) };

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

            endPosition9 = {
                x: Timelines1.getValueFromSlug("endPOsitionX9"),
                y: Timelines1.getValueFromSlug("endPOsitionY9"),
            };

            endPosition10 = {
                x: Timelines1.getValueFromSlug("endPOsitionX10"),
                y: Timelines1.getValueFromSlug("endPOsitionY10"),
            };

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
                colorFill: "white",
            });
            CircleBg1.circleBgRect();
            //.................................
            Palette1.setSelectedColor(params.palette[0]);
            let paletteNode1 = Palette1.monocromathic([
                "#C0C0C0",
                "whitesmoke",
                "#E5E4E2",
                "#808080",
                "#646464",
            ]);

            let defaultPropsNode = {
                stroke: vw(1),
                pointSize: vw(2),
                borderRadious: vw(1),
                heightTabHeader: vw(3),
                paddingVerical: vw(2),
                paddingHorizontal: vw(2),
                placeholderSize: vw(2),
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
                    headWidth: vw(30),
                    headType: 2,
                },
            });

            let Node2 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node2",
                    startPosition: Node1.getExitPoint(),
                    endPosition: endPosition2,
                    headWidth: vw(30),
                    headType: 3,
                },
            });

            let Node3 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node3",
                    startPosition: Node1.getExitPoint(),
                    endPosition: endPosition3,
                    headWidth: vw(30),
                    headType: 1,
                },
            });

            let Node4 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node4",
                    startPosition: endPosition2,
                    endPosition: endPosition4,
                    headWidth: vw(30),
                    headType: 1,
                    reverseEntry: true,
                },
            });

            let Node5 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node5",
                    startPosition: Node3.getExitPoint(),
                    endPosition: endPosition5,
                    headWidth: vw(30),
                    headType: 2,
                    reverseEntry: false,
                },
            });

            let Node6 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node6",
                    startPosition: Node5.getExitPoint(),
                    endPosition: endPosition6,
                    headWidth: vw(30),
                    headType: 1,
                    reverseEntry: false,
                },
            });

            let Node7 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node7",
                    startPosition: Node5.getExitPoint(),
                    endPosition: endPosition7,
                    headWidth: vw(30),
                    headType: 1,
                    reverseEntry: false,
                },
            });

            let Node8 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node8",
                    startPosition: Node2.getExitPoint(),
                    endPosition: endPosition8,
                    headWidth: vw(30),
                    headType: 2,
                    reverseEntry: false,
                },
            });

            //ONLY LINE
            let Node9 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node9",
                    startPosition: Node8.getExitPoint(),
                    endPosition: endPosition7,
                    headWidth: vw(30),
                    headType: 2,
                    reverseEntry: false,
                },
            });

            //ONLY LINE
            let Node10 = new Node(ctx, {
                ...defaultPropsNode,
                ...{
                    name: "node10",
                    startPosition: Node8.getExitPoint(),
                    endPosition: endPosition10,
                    headWidth: vw(30),
                    headType: 2,
                    reverseEntry: false,
                },
            });

            Node10.line();
            Node9.line();
            Node8.drawAll();
            Node7.drawAll({ exitPoint: false });
            Node6.drawAll({ exitPoint: false });
            Node5.drawAll();
            Node4.drawAll({ entryPoint: false });
            Node3.drawAll();
            Node2.drawAll();
            Node1.drawAll();

            window.requestAnimationFrame(render);
        }
    }

    window.requestAnimationFrame(render);
}

export default halfScreenBg;

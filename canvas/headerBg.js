import CircleBg from "./class/CircleBg";
import CanvasInfo from "./class/CanvasInfo";
import GradientFullPage from "./class/GradientFullPage";

function headerBg(params) {
    const canvas = document.querySelector(params.target);

    if (canvas) {
        let CInfo = new CanvasInfo(canvas);
        function vw(percentage) {
            return CInfo.vw(percentage);
        }
        function vh(percentage) {
            return CInfo.vh(percentage);
        }

        function render() {
            //INITIAL SETTINGS
            CInfo.getSize();

            //responsive units #################

            let client = CInfo.client;

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
                colorFill: params.pointColors,
            });
            CircleBg1.circleBgRect();
        }

        render();

        ["orientationchange", "resize"].forEach((handler) => {
            window.addEventListener(handler, () => {
                render();
            });
        });
    }
}

export default headerBg;

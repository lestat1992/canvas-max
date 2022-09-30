import printCircle from "../printCircle";
import invertColor from "./colors/invertColor";

function pointCordinates(ctx, args) {
  printCircle(ctx, {
    x: args.x,
    y: args.y,
    color: args.color,
    stroke: 1,
    radious: 4,
    strokeStyle: invertColor(args.color),
  });
}

export default pointCordinates;

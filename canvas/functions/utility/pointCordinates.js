import circle from "../circle";
import invertColor from "./colors/invertColor";

function pointCordinates(ctx, args) {
  circle(ctx, {
    x: args.x,
    y: args.y,
    color: args.color,
    stroke: 1,
    radious: 4,
    strokeStyle: invertColor(args.color),
  });
}

export default pointCordinates;

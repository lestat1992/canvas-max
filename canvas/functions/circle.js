import drawElement from "./drawElement";

function circle(ctx, args, draw = true) {
  console.log("Sto disgnando dei balletti");
  console.log(ctx, args);
  ctx.beginPath();
  ctx.arc(args.x, args.y, args.radious, 0, 2 * Math.PI);

  if (draw) {
    drawElement(ctx, args);
  }
}

export default circle;

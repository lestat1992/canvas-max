import drawElement from "./drawElement";

function line(ctx, args, draw = true) {
  ctx.beginPath();
  ctx.moveTo(args.startPosition.x, args.startPosition.y);
  ctx.lineTo(args.endPosition.x, args.endPosition.y);

  if (draw) {
    drawElement(ctx, args);
  }
}

export default line;

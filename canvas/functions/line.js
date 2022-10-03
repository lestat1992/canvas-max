import drawElement from "./drawElement";

function line(ctx, args, draw = true) {
  console.log("LINE");
  console.log(ctx);
  console.log(args);
  console.log(args.endPosition.x / args.endPosition.y);

  ctx.beginPath();
  ctx.moveTo(args.startPosition.x, args.startPosition.y);
  ctx.lineTo(args.endPosition.x, args.endPosition.y);

  if (draw) {
    drawElement(ctx, args);
  }
}

export default line;

import drawElement from "./drawElement";

function roundRect(ctx, args, draw = true) {
  if (args.width < 2 * args.borderRadious) args.borderRadious = args.width / 2;
  if (args.height < 2 * args.borderRadious)
    args.borderRadious = args.height / 2;

  ctx.beginPath();
  ctx.moveTo(args.x + args.borderRadious, args.y);
  ctx.arcTo(
    args.x + args.width,
    args.y,
    args.x + args.width,
    args.y + args.height,
    args.borderRadious
  );
  ctx.arcTo(
    args.x + args.width,
    args.y + args.height,
    args.x,
    args.y + args.height,
    args.borderRadious
  );
  ctx.arcTo(args.x, args.y + args.height, args.x, args.y, args.borderRadious);
  ctx.arcTo(args.x, args.y, args.x + args.width, args.y, args.borderRadious);
  ctx.closePath();

  if (draw) {
    drawElement(ctx, args);
  }
}

export default roundRect;

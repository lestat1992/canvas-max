function drawElement(ctx, args) {
  if (args.color) ctx.fillStyle = args.color;
  ctx.fill();
  if (args.stroke) ctx.lineWidth = args.stroke;
  if (args.strokeColor) ctx.strokeStyle = args.strokeColor;
  if (args.stroke) ctx.stroke();
}

export default drawElement;

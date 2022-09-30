function printCircle(ctx, args) {
  console.log("Sto disgnando dei balletti");
  console.log(ctx, args);
  ctx.beginPath();
  ctx.arc(args.x, args.y, args.radious, 0, 2 * Math.PI);

  ctx.fillStyle = args.color;
  ctx.fill();

  if (args.stroke) {
    console;
    ctx.lineWidth = args.stroke;
    ctx.strokeStyle = args.strokeColor;
    ctx.stroke();
  }
}

export default printCircle;

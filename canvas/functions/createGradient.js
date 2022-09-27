function createGradient(ctx, args) {
  let grd;
  if (args.typr == "linear") {
    grd = this.ctx.createLinearGradient(
      args.x,
      args.y,
      args.width + Math.cos(this.angle) * args.length,
      args.height + Math.sin(this.angle) * args.length
    );
  }

  args.colorStep.forEach((el) => {
    grd.addColorStop(el.position, el.color);
    //grd.addColorStop(1, this.colorEnd);
  });

  return grd;
}

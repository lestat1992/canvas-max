function createGradient(ctx, args) {
  let grd;
  if (args.type == "linear") {
    grd = ctx.createLinearGradient(
      args.startPosition.x,
      args.startPosition.y,
      args.endPosition.x,
      args.endPosition.y
    );
  }

  args.colorStep.forEach((el) => {
    grd.addColorStop(el.position, el.color);
  });

  return grd;
}

export default createGradient;

import createGradient from "../functions/createGradient";

class GradientFullPage {
  constructor(ctx, args) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;

    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.colorStep = args.colorStep;

    this.startPosition = args.startPosition;
    this.endPosition = args.endPosition;

    this.type = args.type;
  }
  drawLinear() {
    let grd = createGradient(this.ctx, {
      startPosition: this.startPosition,
      endPosition: this.endPosition,

      colorStep: this.colorStep,
      type: this.type,
    });
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default GradientFullPage;

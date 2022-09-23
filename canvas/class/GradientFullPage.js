class GradientFullPage {
  constructor(ctx, attr) {
    console.log(attr);
    this.x = 0;
    this.y = 0;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.colorStart = attr.colorStart;
    this.colorEnd = attr.colorEnd;
  }
  drawLinear(ctx, attr) {
    let grd = ctx.createLinearGradient(
      this.x,
      this.y,
      this.width + Math.cos(attr.angle) * attr.length,
      this.height + Math.sin(attr.angle) * attr.length
    );
    grd.addColorStop(0, this.colorStart);
    grd.addColorStop(1, this.colorEnd);
    ctx.fillStyle = grd;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default GradientFullPage;

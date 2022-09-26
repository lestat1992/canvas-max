class GradientFullPage {
  constructor(ctx, attr) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.colorStart = attr.colorStart;
    this.colorEnd = attr.colorEnd;
    this.length = attr.length;
    this.angle = attr.angle;
  }
  drawLinear() {
    let grd = this.ctx.createLinearGradient(
      this.x,
      this.y,
      this.width + Math.cos(this.angle) * this.length,
      this.height + Math.sin(this.angle) * this.length
    );
    grd.addColorStop(0, this.colorStart);
    grd.addColorStop(1, this.colorEnd);
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default GradientFullPage;

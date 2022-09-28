import createGradient from "../functions/createGradient";

class Node {
  constructor(ctx, attr) {
    this.ctx = ctx;
    this.stroke = attr.stroke;
    this.startPosition = attr.startPosition;
    this.endPosition = attr.endPosition;
    this.headWidth = attr.headWidth;
    this.headType = attr.headType;
    switch (attr.headType) {
      case 1:
        this.headHeight = this.headWidth * 0.56; //16/9
        break;

      default:
        break;
    }
  }

  line() {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.startPosition.x - this.stroke / 2,
      this.startPosition.y + this.stroke / 2
    );
    this.ctx.lineTo(
      this.endPosition.x + this.stroke / 2,
      this.endPosition.y - this.stroke / 2
    );
    this.ctx.lineWidth = this.stroke;
    this.ctx.stroke();
  }

  roundRect(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x + r, y);
    this.ctx.arcTo(x + w, y, x + w, y + h, r);
    this.ctx.arcTo(x + w, y + h, x, y + h, r);
    this.ctx.arcTo(x, y + h, x, y, r);
    this.ctx.arcTo(x, y, x + w, y, r);
    this.ctx.closePath();
    //this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }

  head() {}

  draw() {
    console.log("####################");
    console.log(this);
    console.log("####################");

    this.line(this.headWidth);

    this.roundRect(
      this.endPosition.x - this.headWidth / 2,
      this.endPosition.y - this.headHeight,
      this.headWidth,
      this.headHeight,
      6
    );
  }

  drawBox() {}
}

export default Node;

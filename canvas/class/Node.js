import createGradient from "../functions/createGradient";
import pointCordinates from "../functions/utility/pointCordinates";
import printCircle from "../functions/printCircle";

class Node {
  constructor(ctx, attr) {
    this.ctx = ctx;
    this.stroke = attr.stroke;
    this.startPosition = attr.startPosition;
    this.endPosition = attr.endPosition;
    this.headWidth = attr.headWidth;
    this.headType = attr.headType;
    this.pointSize = attr.pointSize;
    this.borderRadious = attr.borderRadious;
    this.ratio = false;
    switch (attr.headType) {
      case 1:
        this.ratio = 0.56;
        this.headHeight = this.headWidth * this.ratio; //16/9
        break;

      default:
        break;
    }
  }

  line() {
    console.log("COSEEE");
    console.log(this.endPosition.x / this.endPosition.y);

    this.ctx.beginPath();
    this.ctx.moveTo(
      this.startPosition.x, //- this.stroke / 2,
      this.startPosition.y //+ this.stroke / 2
    );
    this.ctx.lineTo(
      this.endPosition.x, //+ this.stroke / 2,
      this.endPosition.y //- this.stroke / 2
    );
    this.ctx.lineWidth = this.stroke;

    console.log("CORREGGIMI!!!");
    //https://www.w3schools.com/tags/canvas_translate.asp
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
  }

  head() {}

  entryPoint() {
    printCircle(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y,
      color: "white",
      radious: this.pointSize,
    });
  }

  exitPoint() {
    printCircle(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y - this.headHeight,
      color: "white",
      radious: this.pointSize,
    });
  }

  draw() {
    console.log("####################");
    console.log(this);
    console.log("####################");

    //---------------------------------------
    this.line(this.headWidth);
    let grd1 = createGradient(this.ctx, {
      x: this.x,
      y: this.y,
      startPosition: this.startPosition,
      endPosition: this.endPosition,
      colorStep: [
        { position: 0, color: "grey" },
        { position: 1, color: "black" },
      ],
      type: "linear",
    });
    this.ctx.strokeStyle = grd1;
    this.ctx.stroke();
    //--------------------------------------

    this.roundRect(
      this.endPosition.x - this.headWidth / 2,
      this.endPosition.y - this.headHeight,
      this.headWidth,
      this.headHeight,
      this.borderRadious
    );
    let grd2 = createGradient(this.ctx, {
      startPosition: {
        x: this.endPosition.x,
        y: this.endPosition.y - this.headHeight,
      },
      endPosition: {
        x: this.endPosition.x,
        y: this.endPosition.y - this.headHeight + this.pointSize * 3,
      },

      colorStep: [
        { position: 0, color: "grey" },
        { position: 0.95, color: "grey" },
        { position: 0.95, color: "pink" },
        { position: 1, color: "pink" },
        { position: 1, color: "black" },
      ],
      type: "linear",
    });
    this.ctx.fillStyle = grd2;
    this.ctx.fill();

    //-------------------------------------

    this.entryPoint();

    this.exitPoint();

    //exit point

    //this.ctx.lineWidth = 1;
    //this.ctx.stroke();
  }

  debug() {
    //LINE -------------------------
    /*
    pointCordinates(this.ctx, {
      x: this.startPosition.x,
      y: this.startPosition.y,
      color: "#ccfd00",
    });
    pointCordinates(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y,
      color: "#ccfd00",
    });
    */

    pointCordinates(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y - this.headHeight,
      color: "#ccfd00",
    });
    pointCordinates(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y - this.headHeight + this.pointSize * 3,
      color: "#d00ccf",
    });
    //--------------------------
  }

  drawBox() {}
}

export default Node;

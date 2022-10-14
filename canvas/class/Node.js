import createGradient from "../functions/createGradient";
import pointCordinates from "../functions/utility/pointCordinates";
import circle from "../functions/circle";

import line from "../functions/line";
import roundRect from "../functions/roundRect";

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
        this.placeHolders = [{ hasPoint: true }, { hasPoint: true }];
        break;

      default:
        break;
    }
  }

  line() {
    line(this.ctx, {
      startPosition: {
        x: this.startPosition.x,
        y: this.startPosition.y,
      },
      endPosition: {
        x: this.endPosition.x,
        y: this.endPosition.y,
      },
      stroke: this.stroke,
      fill: "black",
    });
  }

  head() {
    roundRect(
      this.ctx,
      {
        x: this.endPosition.x - this.headWidth / 2,
        y: this.endPosition.y - this.headHeight,
        width: this.headWidth,
        height: this.headHeight,
        borderRadious: this.borderRadious,
      },
      false
    );

    let heightTabLabel =
      this.endPosition.y - this.headHeight + this.pointSize * 3;

    let grd2 = createGradient(this.ctx, {
      startPosition: {
        x: this.endPosition.x,
        y: this.endPosition.y - this.headHeight,
      },
      endPosition: {
        x: this.endPosition.x,
        y: heightTabLabel,
      },

      colorStep: [
        { position: 0, color: "grey" },
        { position: 1, color: "grey" },
        { position: 1, color: "black" },
      ],
      type: "linear",
    });
    this.ctx.fillStyle = grd2;
    this.ctx.fill();

    //PALCEHOLDER INTERNI ##################################
    let getTabInnerBody = this.endPosition.y - heightTabLabel;
    let paddingVerical = 5;
    let paddingHorizontal = 20;
    let module =
      (getTabInnerBody - paddingVerical * 2) / this.placeHolders.length;
    console.log("LOOK MA!");
    console.log(getTabInnerBody);

    this.placeHolders.forEach((el, index) => {
      let offsetY = 0;

      if (index === 0) {
        offsetY = paddingVerical;
      }
      this.drawPlaceHolder({
        hasPoint: el.hasPoint,
        module: module * (index + 1) + offsetY,
      });
    });
  }

  entryPoint() {
    circle(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y,
      color: "white",
      radious: this.pointSize,
    });
  }

  exitPoint() {
    circle(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y - this.headHeight,
      color: "white",
      radious: this.pointSize,
    });
  }

  drawPlaceHolder(argsPlaceholder) {
    if (argsPlaceholder.hasPoint) {
      circle(this.ctx, {
        x: this.endPosition.x,
        y:
          argsPlaceholder.module +
          (this.endPosition.y - this.headHeight + this.pointSize * 3),
        color: "green",
        radious: this.pointSize,
      });
    }
  }

  drawAll() {
    this.line();
    this.head();
    this.entryPoint();
    this.exitPoint();
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

    pointCordinates(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y - this.headHeight + this.pointSize * 3,
      color: "#0014ff",
    });

    //--------------------------
  }
}

export default Node;

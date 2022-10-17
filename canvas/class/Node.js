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
    this.heightTabHeader = 40; //metti su
    this.paddingVerical = 20; //metti su
    this.paddingHorizontal = 20; //metti su
    switch (attr.headType) {
      case 1:
        this.ratio = 0.56;
        this.headHeight = this.headWidth * this.ratio; //16/9
        this.placeHolders = [{ hasPoint: true }, { hasPoint: false }];
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
      this.endPosition.y - this.headHeight + this.heightTabHeader;

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
    let getTabInnerBody = this.headHeight - this.heightTabHeader;

    let module =
      (getTabInnerBody - this.paddingVerical * 2) / this.placeHolders.length;
    console.log("LOOK MA!");
    console.log(getTabInnerBody);

    this.placeHolders.forEach((el, index) => {
      let offsetY = 0;

      //if (index === 0) {
      offsetY = this.paddingVerical;
      //}

      this.drawPlaceHolder({
        hasPoint: el.hasPoint,
        moduleAbs: module * (index + 1) + offsetY,
        module: module,
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
    /*
    pointCordinates(this.ctx, {
      x: this.endPosition.x,
      y:
        argsPlaceholder.module +
        (this.endPosition.y - this.headHeight + this.heightTabHeader),
      color: "#FF3456",
    });
    */
    let offsetXAbs =
      this.endPosition.x - this.headWidth / 2 + this.paddingHorizontal;
    let lineWidth = this.headWidth - this.paddingHorizontal * 2;

    if (argsPlaceholder.hasPoint) {
      circle(this.ctx, {
        x:
          this.endPosition.x -
          this.headWidth / 2 +
          this.paddingHorizontal +
          this.pointSize,
        y:
          argsPlaceholder.moduleAbs -
          argsPlaceholder.module / 2 +
          (this.endPosition.y - this.headHeight + this.heightTabHeader),
        color: "green",
        radious: this.pointSize,
      });
      offsetXAbs =
        this.endPosition.x -
        this.headWidth / 2 +
        this.paddingHorizontal +
        this.pointSize * 3;
      lineWidth = lineWidth - this.pointSize * 3;
    }

    roundRect(
      this.ctx,
      {
        x: offsetXAbs,
        y:
          argsPlaceholder.moduleAbs -
          argsPlaceholder.module / 2 +
          (this.endPosition.y - this.headHeight + this.heightTabHeader) -
          ((argsPlaceholder.module / 5) * 3) / 2,
        width: lineWidth,
        height: (argsPlaceholder.module / 5) * 3, //metti su
        borderRadious: this.borderRadious,
      },
      false
    );

    this.ctx.fillStyle = "red";
    this.ctx.fill();
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
      y: this.endPosition.y - this.headHeight + this.heightTabHeader,
      color: "#d00ccf",
    });

    pointCordinates(this.ctx, {
      x: this.endPosition.x,
      y: this.endPosition.y - this.headHeight + this.heightTabHeader,
      color: "#0014ff",
    });

    //--------------------------
  }
}

export default Node;

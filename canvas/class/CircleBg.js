import circle from "../functions/circle";

class CircleBg {
  constructor(ctx, args) {
    this.ctx = ctx;
    this.rowPointN = args.rowPointN;
    this.widthBg = args.widthBg;
    this.radious1 = args.radious1;
    this.radious2 = args.radious2;
    this.radious3 = args.radious3;
    this.colorFill = args.colorFill;
  }
  circleBgRect() {
    let encumbrancePoints = this.widthBg / this.rowPointN;
    for (let iX = 0; iX < this.rowPointN; iX++) {
      for (let iY = 0; iY < this.rowPointN; iY++) {
        let radious = this.radious3;
        if (iX % 2 == 0 && iY % 2 == 0) {
          radious = this.radious2;
        }
        if (iX % 4 == 0 && iY % 4 == 0) {
          radious = this.radious1;
        }
        let args1 = {
          x: iX * encumbrancePoints,
          y: iY * encumbrancePoints,
          radious: radious,
          color: this.colorFill,
        };
        circle(this.ctx, args1);
      }
    }
  }
}

export default CircleBg;

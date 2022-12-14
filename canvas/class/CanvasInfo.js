class CanvasInfo {
  constructor(canvas) {
    this.canvas = canvas;
    this.client;
    this.getSize();
    this.fps = 60;
    this.testFpsArray = [];
    addEventListener("resize", (event) => {
      this.getSize();
    });
  }
  getSize() {
    this.client = {
      width: this.canvas.offsetWidth,
      height: this.canvas.offsetHeight,
    };
  }
  vw(percentage) {
    let result = (this.client.width * percentage) / 100;
    return result;
  }
  vh(percentage) {
    let result = (this.client.height * percentage) / 100;
    return result;
  }
  toF(seconds) {
    return this.fps * seconds;
  }
}

export default CanvasInfo;

class CanvasSize {
  constructor(canvas) {
    this.canvas = canvas;
    let client;
    this.getSize();
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
}

export default CanvasSize;

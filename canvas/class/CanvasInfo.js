class CanvasInfo {
  constructor(canvas) {
    this.canvas = canvas;
    this.client;
    this.getSize();
    this.fps = 60;
    this.testFpsArray = [];
    /*
    ["resize", "fullscreenchange"].forEach(function (evt) {
      addEventListener("resize", (event) => {
        this.getSize();
      });
    });
    */
  }
  getSize() {
    if (!this.canvas.getAttribute("canvas-width")) {
      this.canvas.setAttribute("canvas-width", this.canvas.offsetWidth);
    }
    if (!this.canvas.getAttribute("canvas-height")) {
      this.canvas.setAttribute("canvas-height", this.canvas.offsetHeight);
    }

    this.client = {
      width: this.canvas.getAttribute("canvas-width"),
      height: this.canvas.getAttribute("canvas-height"),
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

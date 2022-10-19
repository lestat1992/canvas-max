import calcFPS from "../functions/utility/calcFps";

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
    this.getDeviceFpS();
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
  getDeviceFpS() {
    //count mumero di frame prima di dare risposta settato 100

    var FPS = 0,
      err = calcFPS({ count: 100, callback: (fps) => (this.fps = fps) });
    if (err) {
      this.fps = 60;
    }
  }
  toF(seconds) {
    return this.fps * seconds;
  }
}

export default CanvasInfo;

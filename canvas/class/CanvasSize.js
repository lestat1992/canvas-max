class CanvasSize {
  constructor(canvas) {
    this.canvas = canvas;
    let client;
    this.getSize();
    addEventListener("resize", (event) => {
      this.getSize();
      console.log(this.client);
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
    console.log();
    let result = (this.client.height * percentage) / 100;
    return result;
  }
}

/*
function 

function 

getSize();
*/

export default CanvasSize;

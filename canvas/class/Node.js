class Node {
  constructor(ctx, stroke) {
    this.stroke = stroke;
  }
  drawLine(ctx, startPosition, endPosition) {
    ctx.beginPath();
    ctx.moveTo(startPosition[0], startPosition[1]);
    ctx.lineTo(endPosition[0], endPosition[1]);
    ctx.stroke();
  }
}

export default Node;

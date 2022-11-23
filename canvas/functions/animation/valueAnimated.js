import getEase from "./getEase";

function getX(params) {
  let distance = params.xTo - params.xFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.xFrom, distance, steps, params.type);
}

function getY(params) {
  let distance = params.yTo - params.yFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.yFrom, distance, steps, params.type);
}

export { getX, getY };

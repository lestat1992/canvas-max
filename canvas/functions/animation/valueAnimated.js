import getEase from "./getEase";

/*

  IL CALCOLO MAGGICO

 percenturaleDiAvanzamentoAnimazione =  tempoTotaleAnimazione / tempo * 100;

 distance = params.xTo - params.xFrom
 result  = params.xTo + ( distance / tempoTotaleAnimazione ) * percenturaleDiAvanzamentoAnimazione
*/

function getX(params) {
  const { frame, frames, xFrom, xTo } = params;
  //console.log(frame, frames);
  let percentagePocede = (frames / frame) * 100;
  let distance = xTo - xFrom;

  return xTo + (distance / percentagePocede) * percentagePocede;
  /*
  let distance = params.xTo - params.xFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.xFrom, distance, steps, params.type);
  */
}

function getY(params) {
  const { frame, frames, yFrom, yTo } = params;
  let percentagePocede = (frames / frame) * 100;
  let distance = yTo - yFrom;

  return yTo + (distance / percentagePocede) * percentagePocede;

  /*
  
  let distance = params.yTo - params.yFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.yFrom, distance, steps, params.type);
  */
}

export { getX, getY };

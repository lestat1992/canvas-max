import getEase from "./getEase";

/*

  IL CALCOLO MAGGICO

 percenturaleDiAvanzamentoAnimazione =  tempoTotaleAnimazione / tempo * 100;

 distance = params.xTo - params.xFrom
 result  = params.xTo + ( distance / tempoTotaleAnimazione ) * percenturaleDiAvanzamentoAnimazione
*/

function getX(params) {
  const { xTo, xFrom, frame, frames } = params;
  //console.log(frame, frames);
  let percentagePocede = (frames / frame) * 100;
  let distance = xTo - xFrom;
  let result = xTo + (distance / percentagePocede) * percentagePocede;
  console.log(frame, frames, percentagePocede);
  return result;

  //FRAME é SBAGLIATO A OGNI NUOVO KEYFRAME DEVE PERTIRE DA 0

  /*
  let distance = params.xTo - params.xFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.xFrom, distance, steps, params.type);
  */
}

function getY(params) {
  const { yTo, yFrom, frame, frames } = params;
  let percentagePocede = (frames / frame) * 100;
  let distance = yTo - yFrom;
  let result = yTo + (distance / percentagePocede) * percentagePocede;
  return result;

  /*
  
  let distance = params.yTo - params.yFrom;
  let steps = params.frames;
  let currentProgress = params.frame;
  return getEase(currentProgress, params.yFrom, distance, steps, params.type);
  */
}

export { getX, getY };

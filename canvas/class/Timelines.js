import { getX, getY } from "../functions/animation/valueAnimated";

class Timelines {
  constructor(attr) {
    this.frame = 0;
    this.MaxTime = 0;

    //se passata solo così la timeline sarà statica
    this.seTtimelineArray(attr.timelineArray);

    this.timelineResultValues = [];

    if (attr.showTimelineInDom) {
      this.showTimelineInDom = attr.showTimelineInDom;
      this.showTimeline();
    } else {
      this.showTimelineInDom = false;
    }
  }

  /*
    passo prorammaticamente una nuova timeline

    utile per passare valori dinamici
  */
  seTtimelineArray(timelineArray) {
    this.timelineArray = timelineArray;
    this.calcMaxTime();
  }

  /* calcolo il tempo massimo di tutte le animzioni */
  calcMaxTime() {}

  /*
    all'aggiornamento del frame disegno 
  */
  updateFrame(frame) {
    this.frame = frame;
    this.processTimelines();
    this.updateTimeline();
  }

  /* questo metodo crea timelineResultValues */
  processTimelines() {}

  getValueFromSlug(slug) {}

  //FOR TIMELINE RENDER #######################################
  //questa metodo crea la timeline in html
  showTimeline() {}
  //questa metodo sposta il cursore per far vedere il tempo
  updateTimeline() {}
}

export default Timelines;

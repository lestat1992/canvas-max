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

    this.updateTimeline();
    this.processTimelines();
  }

  /* questo metodo crea timelineResultValues */
  processTimelines() {
    console.log("I'm processing ---------------");
    let timelineResultValues = [];

    this.timelineArray.forEach((el1) => {
      let time = 0;
      let timesArray = [];
      el1.items.forEach((el2) => {
        time += el2.time;
        timesArray.push(time);
      });

      console.log(timesArray);

      let prevTime = 1;
      timesArray.forEach((t, index) => {
        console.log(
          t + ">=" + this.frame + " && " + this.frame + ">=" + prevTime
        );

        console.log(t >= this.frame && this.frame >= prevTime);

        if (t >= this.frame && this.frame >= prevTime) {
          let part = {
            name: el1.name,
            value: this.processValue(el1, index, t),
          };

          console.log("IN--");
          console.log(part);
          timelineResultValues.push(part);
        }
      });

      this.MaxTime = time;
    });

    console.log("IN THE END ................");
    console.log(timelineResultValues);

    this.timelineResultValues = timelineResultValues;
    //Check part to ptocess
  }

  processValue(el, index, time) {
    switch (el.type) {
      case "x":
        return getX({
          xTo: el.items[index].to,
          xFrom: el.items[index].from,
          frame: this.frame,
          frames: time, //tempo assoluto dell'animazione
          type: el.items[index].type,
        });
        break;
      case "y":
        return getY({
          yTo: el.items[index].to,
          yFrom: el.items[index].from,
          frame: this.frame,
          frames: time, //tempo assoluto dell'animazione
          type: el.items[index].type,
        });
        break;
      default:
        break;
    }
  }

  getValueFromSlug(slug) {
    console.log("RICERCA TRAMITE SLUG !! ---------------------");
    console.log(slug);
    console.log(this.timelineResultValues.find((el) => el.name == slug).value);
    console.log("----------------------------------");

    return this.timelineResultValues.find((el) => el.name == slug).value;
  }

  //FOR TIMELINE RENDER #######################################
  //questa metodo crea la timeline in html
  showTimeline() {}
  //questa metodo sposta il cursore per far vedere il tempo
  updateTimeline() {}
}

export default Timelines;

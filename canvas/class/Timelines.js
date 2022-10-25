import { getX, getY } from "../functions/animation/valueAnimated";

class Timelines {
  constructor(attr) {
    this.frame = 0;
    this.MaxTime = 6000;

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
    this.timelineResultValues = [];
    let timelineResultValues = [];

    this.timelineArray.forEach((el1) => {
      //this.frame
      /*
      let valueFrom;
      let valueTo;
      */

      let indexSelected = false;

      el1.keyframes.forEach((el2, index) => {
        /*
        if (index == 0) {
          valueFrom = el2.time;
        }
        */

        if (indexSelected === false) {
          /*
          if (el2.time < this.frame) {
            //inietro
          }
          */

          if (el2.time >= this.frame) {
            //superato
            indexSelected = index;
          }
        }
      });

      //console.log("----------------------------------");
      //console.log(this.processValue(el1, indexSelected));

      let part = {
        name: el1.name,
        value: this.processValue(el1, indexSelected),
      };

      timelineResultValues.push(part);
    });

    //console.log("----------------------------------");

    this.timelineResultValues = timelineResultValues;
    //Check part to ptocess
  }

  //da correggere
  processValue(el, index) {
    //console.log("RESULT");
    //console.log(index);
    //console.log("se false bisogna riavvolgere il nastro?");

    switch (el.type) {
      case "x":
        console.log("DATI PASSATI --NUOVO--");
        console.log(el.keyframes[index - 1].value);
        console.log(el.keyframes[index].value);
        console.log(this.frame);
        console.log(el.keyframes[index].time); //tempo assoluto dell'animazione
        console.log(el.keyframes[index].type);

        return getX({
          xTo: el.keyframes[index].value,
          xFrom: el.keyframes[index - 1].value,
          frame: this.frame,
          frames: el.keyframes[index].time, //tempo assoluto dell'animazione
          type: el.keyframes[index].type,
        });
        break;
      case "y":
        return getY({
          yTo: el.keyframes[index].value,
          yFrom: el.keyframes[index - 1].value,
          frame: this.frame,
          frames: el.keyframes[index].time, //tempo assoluto dell'animazione
          type: el.keyframes[index].type,
        });
        break;
      default:
        break;
    }
  }

  getValueFromSlug(slug) {
    return this.timelineResultValues.find((el) => el.name == slug).value;
    return false;
  }

  //FOR TIMELINE RENDER #######################################
  //questa metodo crea la timeline in html
  showTimeline() {
    let containerTimeline = document.createElement("div");
    containerTimeline.classList.add("timeline-box");

    let pointer = document.createElement("div");
    pointer.classList.add("pointer");
    containerTimeline.append(pointer);

    this.timelineArray.forEach((el) => {
      let part = document.createElement("div");
      part.classList.add("timeline-part");

      let label = document.createElement("div");
      label.classList.add("label-part");
      label.innerHTML = "<strong>" + el.type + "</strong>:" + el.name;
      part.append(label);

      //loop keyframe
      el.keyframes.forEach((el2) => {
        let positionPercentage = (el2.time / this.MaxTime) * 100;
        let keyframe = document.createElement("div");
        keyframe.classList.add("keyframe");
        keyframe.setAttribute("data-value", el2.value);
        keyframe.style.left = positionPercentage + "%";

        part.append(keyframe);
      });

      containerTimeline.append(part);
    });

    document.querySelector(".hero-bg").append(containerTimeline);
  }
  //questa metodo sposta il cursore per far vedere il tempo
  updateTimeline() {
    let percentage = (this.frame / this.MaxTime) * 100;
    let pointer = document.querySelector(".pointer");
    pointer.style.left = percentage + "%";
  }
}

export default Timelines;

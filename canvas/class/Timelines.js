import { getX, getY } from "../functions/animation/valueAnimated";

class Timelines {
  constructor(attr) {
    this.frame = 0;
    this.MaxTime = 6000;

    //se passata solo così la timeline sarà statica
    this.seTtimelineArray(attr.timelineArray);

    this.timelineResultValues = false;

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
    let timelineResultValues = [];

    this.timelineArray.forEach((el1) => {
      //this.frame
      let valueFrom;
      let valueTo;
      el1.keyfranes.forEach((el2) => {
        if (el2.time) {
        }
      });

      /*

      NON FUNZIONA

      let time = 0;
      let timesArray = [];
      el1.items.forEach((el2) => {
        time += el2.time;
        timesArray.push(time);
      });

      let prevTime = 1;

      timesArray.forEach((t, index) => {
        //console.log(t >= this.frame && this.frame >= prevTime);

        //console.log(prevTime);

        if (t >= this.frame && this.frame >= prevTime) {
          let part = {
            name: el1.name,
            value: this.processValue(el1, index, t),
          };

          if (el1.type == "x") {
            console.log("---------");
            console.log(this.frame + " == " + t + " or " + time);
            console.log(index + " " + this.processValue(el1, index, t));
            console.log(el1, index, t);
          }

          timelineResultValues.push(part);
        }

        prevTime = t;
      });

      this.MaxTime = time;
      */
    });

    this.timelineResultValues = timelineResultValues;
    //Check part to ptocess
  }

  //da correggere
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
    //return this.timelineResultValues.find((el) => el.name == slug).value;
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
      el.keyfranes.forEach((el2) => {
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

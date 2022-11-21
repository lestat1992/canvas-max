import { getX, getY } from "../functions/animation/valueAnimated";

//http://creativejs.com/resources/requestanimationframe/

class Timelines {
  constructor(attr) {
    this.frame = 0;
    this.MaxTime = 6000;
    this.loop = true;
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
    this.timelineArray = this.reorderArray(timelineArray);
    this.calcMaxTime();
    //let mapKeyframeTime = this.calcMaxTime();
  }

  pushNewKeyframes(name, keyframesArray) {
    let index = this.timelineArray.findIndex((el) => el.name == name);

    //timelineUsed = [...timelineUsed, ...keyframesArray];

    keyframesArray.reverse().forEach((el) => {
      this.timelineArray[index].keyframes.push(el);
    });

    this.calcMaxTime();
    if (this.showTimelineInDom) {
      this.showTimeline();
      this.updateTimeline();
    }
  }

  reorderArray(timelineArray) {
    let newArray = [];
    timelineArray.forEach((el1) => {
      let newTimeline = [];

      let mappedTime = el1.keyframes.map((el2) => el2.time);
      mappedTime.sort(function (a, b) {
        return a - b;
      });
      mappedTime.forEach((el2) => {
        let value = el1.keyframes.find((el3) => el3.time === el2);
        newTimeline.push(value);
      });

      let part = JSON.parse(JSON.stringify(el1));
      part.keyframes = newTimeline;
      newArray.push(part);
    });
    return newArray;
  }

  /* calcolo il tempo massimo di tutte le animzioni */
  calcMaxTime() {
    let allMaxTime = 0;
    this.timelineArray.forEach((el) => {
      let maxTime = 0;

      el.keyframes.forEach((el2) => {
        if (!maxTime) {
          maxTime = el2.time;
        } else {
          if (el2.time > maxTime) {
            maxTime = el2.time;
          }
        }
      });

      if (!allMaxTime) {
        allMaxTime = maxTime;
      } else {
        if (allMaxTime > maxTime) {
          allMaxTime = maxTime;
        }
      }
    });

    this.MaxTime = allMaxTime;
  }

  /*
    all'aggiornamento del frame disegno 
  */
  updateFrame() {
    if (this.loop && this.frame >= this.MaxTime) {
      this.frame = 1;
    } else {
      this.frame++;
    }

    this.processTimelines();

    if (this.showTimelineInDom) {
      this.updateTimeline();
    }
  }

  /* questo metodo crea timelineResultValues */
  processTimelines() {
    this.timelineResultValues = [];
    let timelineResultValues = [];

    this.timelineArray.forEach((el1) => {
      let indexSelected = false;

      el1.keyframes.forEach((el2, index) => {
        if (indexSelected === false) {
          if (el2.time >= this.frame) {
            indexSelected = index;
          }
        }
      });

      if (this.showTimelineInDom) {
        this.showIndexSelected(el1, indexSelected);
      }

      let part = {
        name: el1.name,
        value: this.processValue(el1, indexSelected),
      };

      timelineResultValues.push(part);
    });

    this.timelineResultValues = timelineResultValues;
  }

  processValue(el, index) {
    let sumPastKeyframe = 0;

    for (let i = 0; i < index - 1; i++) {
      let e = el.keyframes[i].time;
      let dif = e - sumPastKeyframe;
      sumPastKeyframe = sumPastKeyframe + dif;
    }

    if (el.keyframes[index - 1]) {
      switch (el.type) {
        case "x":
          //console.log(el.name, this.frame, sumPastKeyframe);
          //console.log(this.frame, sumPastKeyframe);
          return getX({
            xTo: el.keyframes[index].value,
            xFrom: el.keyframes[index - 1].value,
            frame: this.frame - sumPastKeyframe, //current frame
            frames: el.keyframes[index].time - el.keyframes[index - 1].time, //next kyframe position
            //type: el.keyframes[index].type,
          });
          break;
        case "y":
          return getY({
            yTo: el.keyframes[index].value,
            yFrom: el.keyframes[index - 1].value,
            frame: this.frame - sumPastKeyframe, //current frame
            frames: el.keyframes[index].time - el.keyframes[index - 1].time, //next kyframe position
            //type: el.keyframes[index].type,
          });
          break;
        default:
          break;
      }
    } else {
      let indexTogo;
      if (index === false) {
        indexTogo = 0;
      } else {
        indexTogo = index;
      }

      return el.keyframes[indexTogo].value;
    }
  }

  getValueFromSlug(slug) {
    return this.timelineResultValues.find((el) => el.name == slug).value;
    return false;
  }

  //FOR TIMELINE RENDER #######################################
  //questa metodo crea la timeline in html
  showTimeline() {
    //document.querySelector(".hero-bg").innerHTML = "";

    //creo il wrapper se non è presente
    let wrapper = document.querySelector(".time-main-wrapper");
    if (!wrapper) {
      let wrapperElement = document.createElement("div");
      wrapperElement.classList.add("time-main-wrapper");
      document.querySelector(".hero-bg").append(wrapperElement);
    } else {
      document.querySelector(".time-main-wrapper").innerHTML = "";
    }

    let containerTimeline = document.createElement("div");
    containerTimeline.classList.add("timeline-box");

    let pointer = document.createElement("div");
    pointer.classList.add("pointer");
    containerTimeline.append(pointer);

    this.timelineArray.forEach((el) => {
      let part = document.createElement("div");
      part.classList.add("timeline-part");
      part.setAttribute("name", el.name);

      let label = document.createElement("div");
      label.classList.add("label-part");
      label.innerHTML = "<strong>" + el.type + "</strong>:" + el.name;
      part.append(label);

      //loop keyframe
      el.keyframes.forEach((el2, index2) => {
        let positionPercentage = (el2.time / this.MaxTime) * 100;
        let keyframe = document.createElement("div");
        keyframe.classList.add("keyframe");
        keyframe.setAttribute("data-value", el2.value);
        keyframe.setAttribute("data-index", index2);
        keyframe.style.left = positionPercentage + "%";

        part.append(keyframe);
      });

      containerTimeline.append(part);
    });

    //document.querySelector(".hero-bg").append(containerTimeline);
    document.querySelector(".time-main-wrapper").append(containerTimeline);
  }

  //questa metodo sposta il cursore per far vedere il tempo
  updateTimeline() {
    let percentage = (this.frame / this.MaxTime) * 100;
    let pointer = document.querySelector(".pointer");
    pointer.style.left = percentage + "%";
  }

  //mostro il keyframe in eleborazione
  showIndexSelected(timeline, indexKeyframe) {
    let allKeyframe = document.querySelectorAll(
      '[name="' + timeline.name + '"] [data-index]'
    );

    allKeyframe.forEach((el) => {
      if (el.getAttribute("data-index") == indexKeyframe) {
        el.classList.add("active-keyframe");
      } else {
        el.classList.remove("active-keyframe");
      }
    });
  }
}

export default Timelines;

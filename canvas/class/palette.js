import convertColor from "../functions/utility/colors/convertColor";

class Palette {
  constructor(paletteArray) {
    let fixedPaletteArray = [];
    paletteArray.forEach((el) => {
      fixedPaletteArray.push(convertColor(el, "hsl"));
    });
    this.paletteArray = fixedPaletteArray;

    /* colore selezionato per alcune elaborazioni */
    this.selectedColor = false;
  }

  setSelectedColor(color) {
    let colorConverted = convertColor(color, "hsl");

    if (this.paletteArray.find((el) => el == colorConverted)) {
      this.selectedColor = colorConverted;
    } else {
      this.selectedColor = false;
    }
  }

  monocromathic(arrayColor, protectPaletteColors = true) {
    let replaceScheme = [];
    let isProtected = false;
    let newColor;

    if (this.selectedColor) {
      arrayColor.forEach((el) => {
        let colorFixed = convertColor(el, "hsl");
        let lightOriginal = colorFixed
          .split(",")
          [colorFixed.split(",").lenght - 1].split(")")[0];

        if (protectPaletteColors) {
          this.paletteArray.find(
            (el2) => el2 == colorFixed && el2 != this.selectedColor
          );
        }

        if (isProtected) {
          newColor = el;
        } else {
          newColor =
            this.selectedColor.split(",")[0] +
            "," +
            this.selectedColor.split(",")[1] +
            "," +
            this.selectedColor.split(",")[2] +
            lightOriginal +
            ")";
        }

        let part = {
          original: el,
          new: newColor,
        };

        replaceScheme.push(part);
      });

      return replaceScheme;
    } else {
      /*
            faccio la media e scelco un colore per la palette
        */
      alert("Conversione automatica non disponibilie");
    }
  }

  convertToPalette() {
    //non disponibile
  }
}

export default Palette;

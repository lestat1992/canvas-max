/*

https://css-tricks.com/converting-color-spaces-in-javascript/

*/

/*--------- Try colors here ----------*/
var RGB = "rgb(0,0,255)",
    RGB_P = "rgb(0%,0%,100%)",
    RGBA = "rgba(0,0,255,0.5)",
    RGBA_P = "rgba(0%,0%,100%,0.5)",
    HEX = "#0000ff",
    HEXA = "#0000ff80",
    HSL = "hsl(240,100%,50%)",
    HSLA = "hsla(240,100%,50%,0.5)",
    NAME = "blue";

/*------------ Functions -------------*/

let arrayColorFunc = [];

arrayColorFunc["RGB-Hex"] = (rgb) => {
    let ex =
        /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
    if (ex.test(rgb)) {
        // choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);

        // convert %s to 0–255
        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1)
                rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
            /* Example:
				75% -> 191
				75/100 = 0.75, * 255 = 191.25 -> 191
				*/
        }

        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);

        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;

        return "#" + r + g + b;
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["RGBA-HEXA"] = (rgba) => {
    let ex =
        /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    if (ex.test(rgba)) {
        let sep = rgba.indexOf(",") > -1 ? "," : " ";
        rgba = rgba.substr(5).split(")")[0].split(sep);

        // strip the slash if using space-separated syntax
        if (rgba.indexOf("/") > -1) rgba.splice(3, 1);

        for (let R in rgba) {
            let r = rgba[R];
            if (r.indexOf("%") > -1) {
                let p = r.substr(0, r.length - 1) / 100;

                if (R < 3) {
                    rgba[R] = Math.round(p * 255);
                } else {
                    rgba[R] = p;
                }
            }
        }

        let r = (+rgba[0]).toString(16),
            g = (+rgba[1]).toString(16),
            b = (+rgba[2]).toString(16),
            a = Math.round(+rgba[3] * 255).toString(16);

        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;
        if (a.length == 1) a = "0" + a;

        return "#" + r + g + b + a;
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HEX-RGB"] = (h, isPct) => {
    let ex = /^#([\da-f]{3}){1,2}$/i;
    if (ex.test(h)) {
        let r = 0,
            g = 0,
            b = 0;
        isPct = isPct === true;

        // 3 digits
        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];

            // 6 digits
        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
        }
        if (isPct) {
            r = +((r / 255) * 100).toFixed(1);
            g = +((g / 255) * 100).toFixed(1);
            b = +((b / 255) * 100).toFixed(1);
        }
        return (
            "rgb(" +
            (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) +
            ")"
        );
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HEXA-RGBA"] = (h, isPct) => {
    let ex = /^#([\da-f]{4}){1,2}$/i;
    if (ex.test(h)) {
        let r = 0,
            g = 0,
            b = 0,
            a = 1;
        isPct = isPct === true;

        if (h.length == 5) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];
            a = "0x" + h[4] + h[4];
        } else if (h.length == 9) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
            a = "0x" + h[7] + h[8];
        }
        a = +(a / 255).toFixed(3);
        if (isPct) {
            r = +((r / 255) * 100).toFixed(1);
            g = +((g / 255) * 100).toFixed(1);
            b = +((b / 255) * 100).toFixed(1);
            a = +(a * 100).toFixed(1);
        }

        return (
            "rgba(" +
            (isPct
                ? r + "%," + g + "%," + b + "%" + "," + a
                : +r + "," + +g + "," + +b + "," + a) +
            ")"
        );
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["RGB-HSL"] = (rgb) => {
    let ex =
        /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
    if (ex.test(rgb)) {
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);

        // convert %s to 0–255
        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1)
                rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
        }

        // make r, g, and b fractions of 1
        let r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            // find greatest and smallest channel values
            cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // calculate hue
        // no difference
        if (delta == 0) h = 0;
        // red is max
        else if (cmax == r) h = ((g - b) / delta) % 6;
        // green is max
        else if (cmax == g) h = (b - r) / delta + 2;
        // blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // make negative hues positive behind 360°
        if (h < 0) h += 360;

        // calculate lightness
        l = (cmax + cmin) / 2;

        // calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return "hsl(" + h + "," + s + "%," + l + "%)";
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["RGBA-HSLA"] = (rgba) => {
    let ex =
        /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    if (ex.test(rgba)) {
        let sep = rgba.indexOf(",") > -1 ? "," : " ";
        rgba = rgba.substr(5).split(")")[0].split(sep);

        // strip the slash if using space-separated syntax
        if (rgba.indexOf("/") > -1) rgba.splice(3, 1);

        for (let R in rgba) {
            let r = rgba[R];
            if (r.indexOf("%") > -1) {
                let p = r.substr(0, r.length - 1) / 100;

                if (R < 3) {
                    rgba[R] = Math.round(p * 255);
                }
            }
        }

        // make r, g, and b fractions of 1
        let r = rgba[0] / 255,
            g = rgba[1] / 255,
            b = rgba[2] / 255,
            a = rgba[3],
            // find greatest and smallest channel values
            cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // calculate hue
        // no difference
        if (delta == 0) h = 0;
        // red is max
        else if (cmax == r) h = ((g - b) / delta) % 6;
        // green is max
        else if (cmax == g) h = (b - r) / delta + 2;
        // blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // make negative hues positive behind 360°
        if (h < 0) h += 360;

        // calculate lightness
        l = (cmax + cmin) / 2;

        // calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HSL-RGB"] = (hsl, isPct) => {
    let ex =
        /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
    if (ex.test(hsl)) {
        let sep = hsl.indexOf(",") > -1 ? "," : " ";
        hsl = hsl.substr(4).split(")")[0].split(sep);
        isPct = isPct === true;

        let h = hsl[0],
            s = hsl[1].substr(0, hsl[1].length - 1) / 100,
            l = hsl[2].substr(0, hsl[2].length - 1) / 100;

        // strip label and convert to degrees (if necessary)
        if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
        else if (h.indexOf("rad") > -1)
            h = Math.round((h.substr(0, h.length - 3) / (2 * Math.PI)) * 360);
        else if (h.indexOf("turn") > -1)
            h = Math.round(h.substr(0, h.length - 4) * 360);
        // keep hue fraction of 360 if ending up over
        if (h >= 360) h %= 360;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        if (isPct) {
            r = +((r / 255) * 100).toFixed(1);
            g = +((g / 255) * 100).toFixed(1);
            b = +((b / 255) * 100).toFixed(1);
        }

        return (
            "rgb(" +
            (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) +
            ")"
        );
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HSLA-RGBA"] = (hsla, isPct) => {
    let ex =
        /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    if (ex.test(hsla)) {
        let sep = hsla.indexOf(",") > -1 ? "," : " ";
        hsla = hsla.substr(5).split(")")[0].split(sep);

        // strip the slash if using space-separated syntax
        if (hsla.indexOf("/") > -1) hsla.splice(3, 1);

        isPct = isPct === true;

        // must be fractions of 1
        let h = hsla[0],
            s = hsla[1].substr(0, hsla[1].length - 1) / 100,
            l = hsla[2].substr(0, hsla[2].length - 1) / 100,
            a = hsla[3];

        // strip label and convert to degrees (if necessary)
        if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
        else if (h.indexOf("rad") > -1)
            h = Math.round((h.substr(0, h.length - 3) / (2 * Math.PI)) * 360);
        else if (h.indexOf("turn") > -1)
            h = Math.round(h.substr(0, h.length - 4) * 360);
        if (h >= 360) h %= 360;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        let pctFound = a.indexOf("%") > -1;

        if (isPct) {
            r = +((r / 255) * 100).toFixed(1);
            g = +((g / 255) * 100).toFixed(1);
            b = +((b / 255) * 100).toFixed(1);
            if (!pctFound) {
                a *= 100;
            } else {
                a = a.substr(0, a.length - 1);
            }
        } else if (pctFound) {
            a = a.substr(0, a.length - 1) / 100;
        }

        return (
            "rgba(" +
            (isPct
                ? r + "%," + g + "%," + b + "%," + a + "%"
                : +r + "," + +g + "," + +b + "," + +a) +
            ")"
        );
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HEX-HSL"] = (H) => {
    let ex = /^#([\da-f]{3}){1,2}$/i;
    if (ex.test(H)) {
        // convert hex to RGB first
        let r = 0,
            g = 0,
            b = 0;
        if (H.length == 4) {
            r = "0x" + H[1] + H[1];
            g = "0x" + H[2] + H[2];
            b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
            r = "0x" + H[1] + H[2];
            g = "0x" + H[3] + H[4];
            b = "0x" + H[5] + H[6];
        }
        // then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cmax == r) h = ((g - b) / delta) % 6;
        else if (cmax == g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return "hsl(" + h + "," + s + "%," + l + "%)";
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HEXA-HSLA"] = (H) => {
    let ex = /^#([\da-f]{4}){1,2}$/i;
    if (ex.test(H)) {
        let r = 0,
            g = 0,
            b = 0,
            a = 1;
        // 4 digits
        if (H.length == 5) {
            r = "0x" + H[1] + H[1];
            g = "0x" + H[2] + H[2];
            b = "0x" + H[3] + H[3];
            a = "0x" + H[4] + H[4];
            // 8 digits
        } else if (H.length == 9) {
            r = "0x" + H[1] + H[2];
            g = "0x" + H[3] + H[4];
            b = "0x" + H[5] + H[6];
            a = "0x" + H[7] + H[8];
        }

        // normal conversion to HSLA
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cmax == r) h = ((g - b) / delta) % 6;
        else if (cmax == g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        a = (a / 255).toFixed(3);

        return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HSL-HEX"] = (hsl) => {
    let ex =
        /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
    if (ex.test(hsl)) {
        let sep = hsl.indexOf(",") > -1 ? "," : " ";
        hsl = hsl.substr(4).split(")")[0].split(sep);

        let h = hsl[0],
            s = hsl[1].substr(0, hsl[1].length - 1) / 100,
            l = hsl[2].substr(0, hsl[2].length - 1) / 100;

        // strip label and convert to degrees (if necessary)
        if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
        else if (h.indexOf("rad") > -1)
            h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
        else if (h.indexOf("turn") > -1)
            h = Math.round(h.substr(0, h.length - 4) * 360);
        if (h >= 360) h %= 360;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        // having obtained RGB, convert channels to hex
        r = Math.round((r + m) * 255).toString(16);
        g = Math.round((g + m) * 255).toString(16);
        b = Math.round((b + m) * 255).toString(16);

        // prepend 0s if necessary
        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;

        return "#" + r + g + b;
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["HSLA-HEXA"] = (hsla) => {
    let ex =
        /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    if (ex.test(hsla)) {
        let sep = hsla.indexOf(",") > -1 ? "," : " ";
        hsla = hsla.substr(5).split(")")[0].split(sep);

        // strip the slash
        if (hsla.indexOf("/") > -1) hsla.splice(3, 1);

        let h = hsla[0],
            s = hsla[1].substr(0, hsla[1].length - 1) / 100,
            l = hsla[2].substr(0, hsla[2].length - 1) / 100,
            a = hsla[3];

        // strip label and convert to degrees (if necessary)
        if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
        else if (h.indexOf("rad") > -1)
            h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
        else if (h.indexOf("turn") > -1)
            h = Math.round(h.substr(0, h.length - 4) * 360);
        if (h >= 360) h %= 360;

        // strip % from alpha, make fraction of 1 (if necessary)
        if (a.indexOf("%") > -1) a = a.substr(0, a.length - 1) / 100;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        r = Math.round((r + m) * 255).toString(16);
        g = Math.round((g + m) * 255).toString(16);
        b = Math.round((b + m) * 255).toString(16);
        a = Math.round(a * 255).toString(16);

        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;
        if (a.length == 1) a = "0" + a;

        return "#" + r + g + b + a;
    } else {
        return "Invalid input color";
    }
};

arrayColorFunc["NAME-RGB"] = (name) => {
    // create fake div
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);

    // get color of div
    let cs = window.getComputedStyle(fakeDiv),
        pv = cs.getPropertyValue("color");

    // remove div after obtaining desired color value
    document.body.removeChild(fakeDiv);

    return pv;
};

arrayColorFunc["NAME-HEX"] = (name) => {
    // get RGB from named color in div
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);

    let cs = window.getComputedStyle(fakeDiv),
        pv = cs.getPropertyValue("color");

    document.body.removeChild(fakeDiv);

    // code ripped from RGB-Hex() (except pv is substringed)
    let rgb = pv.substr(4).split(")")[0].split(","),
        r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
};

arrayColorFunc["NAME-HSL"] = (name) => {
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);

    let cs = window.getComputedStyle(fakeDiv),
        pv = cs.getPropertyValue("color");

    document.body.removeChild(fakeDiv);

    // code ripped from RGB-HSL() (except pv is substringed)
    let rgb = pv.substr(4).split(")")[0].split(","),
        r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsl(" + h + "," + s + "%," + l + "%)";
};

//CUSTOM #####################################

arrayColorFunc["RGB-HEX"] = (rgb) => {
    let hsl = arrayColorFunc["RGB-HSL"](rgb);
    return arrayColorFunc["HSL-HEX"](hsl);
};

/*-------- Table Generation ----------
var arr = "\u2192",
  fns = [
    ["RGB " + arr + " Hex", RGB, RGB-Hex(RGB), RGB_P, RGB-Hex(RGB_P)],
    [
      "RGBA " + arr + " HexA",
      RGBA,
      RGBA-HexA(RGBA),
      RGBA_P,
      RGBA-HexA(RGBA_P),
    ],
    ["Hex " + arr + " RGB", HEX, hex-RGB(HEX), HEX, hex-RGB(HEX, true)],
    [
      "HexA " + arr + " RGBA",
      HEXA,
      hexA-RGBA(HEXA),
      HEXA,
      hexA-RGBA(HEXA, true),
    ],
    ["RGB " + arr + " HSL", RGB, RGB-HSL(RGB), RGB_P, RGB-HSL(RGB_P)],
    [
      "RGBA " + arr + " HSLA",
      RGBA,
      RGBA-HSLA(RGBA),
      RGBA_P,
      RGBA-HSLA(RGBA_P),
    ],
    ["HSL " + arr + " RGB", HSL, HSL-RGB(HSL), HSL, HSL-RGB(HSL, true)],
    [
      "HSLA " + arr + " RGBA",
      HSLA,
      HSLA-RGBA(HSLA),
      HSLA,
      HSLA-RGBA(HSLA, true),
    ],
    ["Hex " + arr + " HSL", HEX, hex-HSL(HEX), "N/A", "N/A"],
    ["HexA " + arr + " HSLA", HEXA, hexA-HSLA(HEXA), "N/A", "N/A"],
    ["HSL " + arr + " Hex", HSL, HSL-Hex(HSL), "N/A", "N/A"],
    ["HSLA " + arr + " HexA", HSLA, HSLA-HexA(HSLA), "N/A", "N/A"],
    ["Name " + arr + " RGB", NAME, name-RGB(NAME), "N/A", "N/A"],
    ["Name " + arr + " Hex", NAME, name-Hex(NAME), "N/A", "N/A"],
    ["Name " + arr + " HSL", NAME, name-HSL(NAME), "N/A", "N/A"],
  ];
// table cells
fns.forEach(arrayColorFunc["(el) {
  let tb = document.querySelector("tbody"),
    tr = document.createElement("tr");

  for (let e in el) {
    let c = document.createElement(+e ? "td" : "th"),
      cTxt = document.createTextNode(el[e]);
    c.appendChild(cTxt);
    tr.appendChild(c);
  }
  tb.appendChild(tr);
});
*/

(RGB = "rgb(0,0,255)"),
    (RGB_P = "rgb(0%,0%,100%)"),
    (RGBA = "rgba(0,0,255,0.5)"),
    (RGBA_P = "rgba(0%,0%,100%,0.5)"),
    (HEX = "#0000ff"),
    (HEXA = "#0000ff80"),
    (HSL = "hsl(240,100%,50%)"),
    (HSLA = "hsla(240,100%,50%,0.5)"),
    (NAME = "blue");

function convertColor(color, newMethod, isPct = false) {
    let oldColorMethod;

    /*
    let isPct = false;
  if (color.includes("%")) {
    isPct = true;
  }
  */

    if (color.includes("rgba")) {
        oldColorMethod = "RGBA";
    } else if (color.includes("rgb")) {
        oldColorMethod = "RGB";
    } else if (color.includes("#")) {
        if (color.length <= 7) {
            oldColorMethod = "HEX";
        } else {
            oldColorMethod = "HEXA";
        }
    } else if (color.includes("hsla")) {
        oldColorMethod = "HSLA";
    } else if (color.includes("hsl")) {
        oldColorMethod = "HSL";
    } else {
        oldColorMethod = "NAME";
    }

    return arrayColorFunc[oldColorMethod + "-" + newMethod.toUpperCase()](
        color,
        isPct
    );
}

export default convertColor;

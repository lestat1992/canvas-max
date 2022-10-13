//  https://riptutorial.com/html5-canvas/example/18718/set-frame-rate-using-requestanimationframe

function calcFPS(a) {
  function b() {
    if (f--) c(b);
    else {
      var e = 3 * Math.round((1e3 * d) / 3 / (performance.now() - g));
      "function" === typeof a.callback && a.callback(e);
      console.log("Calculated: " + e + " frames per second");
      return e;
    }
  }
  var c =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame;
  if (!c) return !0;
  a || (a = {});
  var d = a.count || 60,
    f = d,
    g = performance.now();
  b();
}

export default calcFPS;

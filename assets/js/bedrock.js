// Bedrock strip: the grounding line retreats from the sill into the basin as the
// page scrolls, and the bed rebounds behind it. Same geometry as the toy model.
(function () {
  "use strict";
  var SEA = 11, SILL = 820, INLAND = 230;
  var bedEl = document.getElementById("bedrock-bed");
  if (!bedEl) return;
  var iceEl = document.getElementById("bedrock-ice");
  var oceanEl = document.getElementById("bedrock-ocean");
  var seaEl = document.getElementById("bedrock-sea");

  function bed(x, p, xgl) {
    var y = 18 + 8 * Math.exp(-Math.pow((x - 420) / 150, 2)) -
      4 * Math.exp(-Math.pow((x - SILL) / 110, 2)) +
      Math.max(0, x - SILL) * 0.022;
    return y - 3 * p * Math.exp(-Math.pow((x - xgl - 120) / 260, 2));
  }

  function draw(p) {
    var xgl = SILL + (INLAND - SILL) * p;
    var bedPath = "M-5,32L-5," + bed(0, p, xgl).toFixed(1), icePath = "M0," + bed(0, p, xgl).toFixed(1), x;
    for (x = 0; x <= 1200; x += 20) bedPath += "L" + x + "," + bed(x, p, xgl).toFixed(1);
    bedEl.setAttribute("d", bedPath + "L1205," + bed(1200, p, xgl).toFixed(1) + "L1205,32Z");
    for (x = 0; x <= xgl; x += 20) icePath += "L" + x + "," + (SEA - 9 * Math.sqrt(1 - x / xgl)).toFixed(1);
    icePath += "L" + xgl.toFixed(1) + "," + (SEA - 0.6) + "L" + (xgl + 110).toFixed(1) + "," + (SEA - 0.3) +
      "L" + (xgl + 110).toFixed(1) + "," + (SEA + 0.4) + "L" + xgl.toFixed(1) + "," + bed(xgl, p, xgl).toFixed(1);
    for (x = Math.floor(xgl / 20) * 20; x >= 0; x -= 20) icePath += "L" + x + "," + bed(x, p, xgl).toFixed(1);
    iceEl.setAttribute("d", icePath + "Z");
    oceanEl.setAttribute("x", xgl);
    oceanEl.setAttribute("width", 1200 - xgl);
    seaEl.setAttribute("x1", xgl + 110);
  }

  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var queued = false;
  function update() {
    queued = false;
    var range = document.documentElement.scrollHeight - window.innerHeight;
    draw(still || range <= 0 ? 0 : Math.min(1, Math.max(0, window.pageYOffset / range)));
  }
  update();
  if (!still) {
    var request = function () {
      if (!queued) { queued = true; window.requestAnimationFrame(update); }
    };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
  }
})();

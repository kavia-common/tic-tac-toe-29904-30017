(function () {
  'use strict';

  // Maintain pixel-perfect base at 414x1100 with responsive scale
  function applyScale() {
    var root = document.querySelector('.screen-root');
    if (!root) return;
    var baseW = 414;
    var vw = Math.min(window.innerWidth, document.documentElement.clientWidth || window.innerWidth);
    var scale = Math.max(1, vw / baseW); // never downscale to keep pixel-perfect at base width
    root.style.transformOrigin = 'top center';
    root.style.transform = 'scale(' + Math.min(scale, 1) + ')'; // keep 1:1 at >= base width
    // If screen smaller than base, allow downscale
    if (vw < baseW) {
      root.style.transform = 'scale(' + (vw / baseW) + ')';
    }
  }

  window.addEventListener('resize', applyScale);
  window.addEventListener('orientationchange', applyScale);
  document.addEventListener('DOMContentLoaded', applyScale);

  // Keyboard enhancements for icon buttons
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var el = document.activeElement;
      if (el && el.getAttribute('role') === 'button') {
        e.preventDefault();
        el.click();
      }
    }
  });
})();

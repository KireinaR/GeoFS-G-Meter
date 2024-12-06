// ==UserScript==
// @name GeoFS G-meter addon
// @namespace http://tampermonkey.net/
// @version 1
// @description An addon for GeoFS that adds new features and fixes realism issues
// @author KireinaR (Wen/Syn)
// @match https://geo-fs.com/geofs.php*
// @match https://*.geo-fs.com/geofs.php*
// @run-at document-end
// @grant none
// ==/UserScript==

(function () {
  "use strict";

  // Create the G-force display once
  const meter = document.createElement("div");
  meter.id = "meterdisplay";
  meter.style.position = "fixed";
  meter.style.bottom = "100px";
  meter.style.right = "70px";
  meter.style.border = "1px solid #888888";
  meter.style.backgroundColor = "#000";
  meter.style.color = "#fff";
  meter.style.opacity = "0.5";
  meter.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
  meter.style.borderRadius = "10px";
  meter.style.padding = "10px";
  meter.style.fontFamily = "Arial, sans-serif";
  meter.style.fontSize = "14px";
  meter.style.pointerEvents = "none";
  meter.style.zIndex = "9999";
  meter.textContent = "Loading G-Force...";

  document.body.appendChild(meter);

  function updateGForceDisplay() {
    if (geofs?.animation?.values?.accZ !== undefined) {
      const g = (geofs.animation.values.accZ / 9.80665).toFixed(2); // Convert and format
      meter.textContent = `${g} G`;
    } else {
      meter.textContent = "G-Force data unavailable"; // Fallback message
    }
  }

  // Update every 100 ms
  setInterval(updateGForceDisplay, 100);
})();

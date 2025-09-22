const Konva = require("konva");

// import Konva from "konva";
// import "konva/skia-backend"; // or 'konva/skia-backend'

// Create a stage
const stage = new Konva.Stage({
  container: "container", // This will be ignored in Node.js
  width: 800,
  height: 600,
});

const layer = new Konva.Layer();
stage.add(layer);

const rect = new Konva.Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  fill: "black",
  draggable: true,
});

layer.add(rect).draw();

// ... the rest of your konva code

// Export as data URL
const dataURL = stage.toDataURL();
console.log(dataURL);

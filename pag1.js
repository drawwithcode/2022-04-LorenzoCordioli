const urlString = window.location.href;
let url = new URL(urlString);

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(90);
}
function draw() {
  background(0);
  const R = map(rotationZ, 0, 180, 0, 255);
  const B = map(rotationZ, 180, 360, 0, 255);
  fill(R, 255, B);
  textAlign(CENTER);
  textFont("Archivo");
  textStyle(BOLD);
  textSize(24);
  text(
    "DON'T DRAW TO HARD \n TO AVOID WRIST INJURIES ",
    windowWidth / 2,
    windowHeight / 3.5
  );

  textAlign(CENTER);
  textFont("Archivo");
  textStyle(BOLD);
  textSize(15);

  text(
    "1. keep your finger on \nthe screen to draw \n 2.move your device \nto change the line position \n 3.rotate the device \nto change the line colour \n4.shake to save your artwork ",
    windowWidth / 2,
    windowHeight / 2.5
  );

  textAlign(CENTER);
  textFont("Archivo");
  textStyle(BOLD);
  textSize(24);

  text("press to start ", windowWidth / 2, windowHeight / 1.4);
}

function touchStarted() {
  window.open(`${url}index2.html?count=${frameCount}`, "_self");
}

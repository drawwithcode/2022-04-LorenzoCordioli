const urlString = window.location.href;
let url = new URL(urlString);

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  textSize(36);
  background(0);
  frameRate(90);
  setShakeThreshold(50);
}
function draw() {
  if (mouseIsPressed) {
    const widthX = map(rotationY, -45, 45, 0, width);
    const widthY = map(rotationX, -45, 45, 0, height);
    const PwidthX = map(pRotationY, -45, 45, 0, width);
    const PwidthY = map(pRotationX, -45, 45, 0, height);

    strokeWeight(20);
    line(PwidthX, PwidthY, widthX, widthY);
  }
  if (rotationZ <= 90) {
    stroke("#FFE194");
  } else if (rotationZ > 90 && rotationZ <= 180) {
    stroke("#294694");
  } else if (rotationZ > 180 && rotationZ <= 270) {
    stroke("#6C8BE0");
  } else {
    stroke("#E0BE6B");
  }
}

function deviceShaken() {
  saveCanvas("disegnetto", "png");
}

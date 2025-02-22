function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(173,216,230);
  strokeWeight(0);
  fill("#583927");
  rect(0,450,500,300);
  strokeWeight(0);
  fill ("green");
  rect (0,430,500,20);
  strokeWeight(0);
  fill("grey");
  rect (240,215,18,215);
  strokeWeight(4);
  fill("blue");
  rect(100, 60, 300, 150);
  fill("white");
  textSize(40);
  textStyle(BOLDITALIC);
  text('BE KIND', 165, 120);
  fill("white");
  textSize(40);
  textStyle(BOLDITALIC);
  text('TO YOURSELF', 105, 175);
}
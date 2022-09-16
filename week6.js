//declaring variables
let midy;
let midx;

function setup() {
  createCanvas(500, 500);
  background(0);
  noFill(); 
  //assigning variables
  midx = 500/2;
  midy = 500/2;
}

function draw () {
  // establishing condiitons
  if ((mouseX >= midx && mouseY >= midy) || (mouseX <= midy && mouseY <= midy)){
    stroke (97, 212, 187);
    ellipse (mouseX, mouseY, 35);
  } else {
    stroke (212, 97, 126);
    rect (mouseX, mouseY, 35);
  }
}

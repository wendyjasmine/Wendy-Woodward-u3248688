//array for assigning colour to each circle function
let myColour = [
    [235, 52, 76],
    [255, 94, 0],
    [255, 221, 0],
    [100, 227, 102],
    [46, 217, 185],
    [0, 115, 255],
    [154, 68, 219],
  ]
  
  //global Variables are defined
  let numberWide;
  let midy;
  let speed;
  let size;
  let bounceValue;
  
  
  function setup() {
    createCanvas(500, 500);
    noStroke(); 
    colorMode(RGB);
    
    //assigning variables
    numberWide = 7;
    midy = 500/2;
   speed = 300;
    size = 50;
  }
  
  
  function draw() {
    background(0);
    
    //this variable makes the balls bounce
    bounceValue = sin(frameCount/22) *speed; 
    
    //assigning condiiton to make the balls move slow to fast
    if (frameCount < 300) {   
      speed += (0.02 * frameCount);
    }
    
  
    //creating 7 circles
    for (let i = 0; i < numberWide; i++) {
    // mapping each circle evenly in the canvas
    let xPos = map(i, 0, numberWide-1, 50, width-50);
   
      // declaring 7 circle functions individual parameters 
      myCircle (xPos, bounceValue/2.8, myColour[0]);
      myCircle (xPos, bounceValue/3.3, myColour[1]);
      myCircle (xPos, bounceValue/4, myColour[2]);
      myCircle (xPos, bounceValue/5, myColour [3]);
      myCircle (xPos, bounceValue/6, myColour[4]);
      myCircle (xPos, bounceValue/7, myColour[5]);
      myCircle (xPos, bounceValue/8, myColour[6]);
    
    }
  
  //calling the circle function to the screen 
  function myCircle(x, y, colour) {
    fill (colour);
    ellipse(x, y + midy, size);
  }
}

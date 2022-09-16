
//declaring global variables
let midx;
let midy;
let radius;
let h;

function setup () {
    createCanvas(500, 500);    
    colorMode(RGB);
    noStroke();
    ellipseMode(RADIUS);
}

function draw() {
    background(0);

    //assigning variables
    midx = 500/2;
    midy = 500/2;
    radius = midx/2;
    h = 0;

    //assigning the paraments of this function
    radialGradient(midx, midy);

    function radialGradient(x, y) {

    for (let i = radius; i >= 0; i-=0.4) {
        fill(10, h, 100);
        ellipse(x, y, i, i);
        h = (h + 1) % 500 ;
      }
    }
    
    //creating the pupil 
    fill(0);
    quad(midx, midy - 70, midx + 30, midy, midx, midy +70, midx - 30, midy);
    //creating the sheen on the "eye"
    fill(255, 255, 255, 90);
    arc(midx + 40, midy - 40, 60, 60, 300, QUARTER_PI);


    
}
   
   

 
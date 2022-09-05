/*
    Paste the code for your week 5 exercise below.
*/
let midx;
let midy;
function setup () {
    createCanvas(windowWidth, windowHeight);
    midx = width/2;
    midy = height/2;
    colorMode(RGB);
    noStroke();
  ellipseMode(RADIUS);
    
    
}

function draw() {
    background(0);
    
    radialGradient(midx, midy);

    

    function radialGradient(x, y) {
    
    let radius = midx / 4;
    let h = 0;
    for (let i = radius; i >= 0; i-=0.2) {
        fill(0, h, 200);
        ellipse(x, y, i, i);
        h = (h + 1) % 360 ;
        
    }
    }
}

// function setup() {
//     createCanvas(710, 400);
//     dim = width / 2;
//     colorMode(RGB);
//     noStroke();
//     ellipseMode(RADIUS);
    
//   }
  
//   function draw() {
//     background (255);
//     drawGradient(width /2 , height / 2);
    
    
//     function drawGradient(x, y) {
//     let radius = dim / 2;
//     let h = 1;
//     for (let r = radius; r > 0; --r) {
//       fill(90, 90, h);
//       ellipse(x, y, r, r);
//       h = (h + 1) % 360;
      
//     }
//     }
//   }

    // fill (50);

    

    // ellipse(midx, midy, size * 1.66);


    // fill (100);
    // ellispe(midx, midy, size * 1.33);
    // fill (150) ;
    // ellipse(midx, midy, size);

    // stop();

    



    

    

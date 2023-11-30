/* function setup() {
    createCanvas(500, 900);
    frameRate(1);
    background(220);
  }
  
  function draw() {
  
let i = 0;
if (i < 10){
      noStroke();
      fill(random(0, height), 200, 200,200);
      ellipse(random(0, 200), random(0, height), 50);
      i = i + 1;
    } 
}  */

let circles = [];

function setup() {
  createCanvas(windowWidth, 3500);
  noStroke();

  for (let i = 0; i < 10000; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(2, 7);

    let circle = {
      x: x,
      y: y,
      diameter: diameter
    };

    circles.push(circle);
  }
}

function draw() {
  background(246, 247, 235);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    fill(233, 79, 55);
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  }
} 

  



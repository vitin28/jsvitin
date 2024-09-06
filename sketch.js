function setup() {
    createCanvas(500, 600);
    background("pink")
  }
  
  function draw() {
    stroke("yellow");
    fill("green");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
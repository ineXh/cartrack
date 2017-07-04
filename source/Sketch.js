function setup() {
  window.scrollTo(0,1);
  document.body.style.overflow = 'hidden';
  bg = loadImage("assets/sand.png");
  carImage = loadImage("assets/car.png");
  createCanvas(window.innerWidth, window.innerHeight);
  vehicle = new Vehicle(window.innerWidth/2, window.innerHeight/2);
}


function draw() {
  background(255)
  //mouse = new PVector(mouseX, mouseY)

  fill(200);
  stroke(0)
  strokeWeight(2)
  ellipse(mouseX, mouseY, 48, 48)
  vehicle.seek(mouseX, mouseY)
  vehicle.update();
  vehicle.display();
}
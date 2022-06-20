

let movers = [];
let = sun;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  for (let i = 0; i < 30; i++) {
  let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(10);
    pos.setMag(random(200,300));
   
    vel.rotate(-PI/2)
    
    let m = random(5, 15);
    movers[i]= new Mover(pos.x, pos.y, vel.x, vel.y, m)
  }
  sun = new Mover(0,0,0,0 , 900)
  background(0);

}

function draw() {
  background(0, 20);
  fill(255);
  textFont("helvetica");
  textSize(100);
  textAlign(CENTER, CENTER);
  text('MotionDAO', width/2,height/2);
  translate(width/2, height/2);


for (let mover of movers) {
  sun.attract(mover);
  for( let other of movers) {
    if (mover !== other) {
      mover.attract(other);
    
    }
  }
}
  // for (let i = 0; i < movers.length; i++) {
  //   for (let j = 0; j < movers.length; j++) {
  //     if (i !== j) {
   for (let mover of movers ) {
    mover.update();
    mover.display();
   
  }


 
 
  //sun.display();
}


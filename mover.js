
class Mover {
  constructor(x, y, vx,vy, m) {
   
    this.position = createVector(x, y);
    this.velocity = createVector( vx, vy);
    this.acceleration = createVector(0 , 0);
    this.velocity.mult(.6);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(218,165,32);
    strokeWeight(2);
    fill(218,165,32);
    ellipse(this.position.x, this.position.y, this.mass);
  }

  attract(other) {
    let force = p5.Vector.sub(this.position, other.position);
    let distanceSq = constrain(force.magSq(), 100, 500);
    let G = 0.2;
    let strength = (G * this.mass * other.mass) /  distanceSq;
    force.setMag(strength);
  other.applyForce(force);
  }
}
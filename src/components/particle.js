class Particle {
  constructor(_loc) {
    var loc = _loc.copy();
    var vel = p5.createVector(p5.random(-1, 1), p5.random(-2, 0));
    var acc = p5.createVector(0, 0.05);
    var lifespan = 255;
    var h = p5.random(175, 250);
    var sz = p5.random(10, 80);

    // Method to update location
    this.update = function () {
      vel.add(acc);
      loc.add(vel);
      lifespan -= 2;
    };

    // Method to display
    this.paint = function () {
      p5.stroke(h, 175, 230, lifespan);
      p5.strokeWeight(1);
      p5.fill(h, 30, 30, lifespan);
      p5.ellipse(loc.x, loc.y, sz, sz);
    };

    // Is the particle still useful?
    this.isDead = function () {
      if (lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    };
  }
}

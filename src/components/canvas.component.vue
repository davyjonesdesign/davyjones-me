<template>
  <div id="vue-canvas"></div>
  <!-- <span class="xy">{{x}}, {{y}}</span> -->
</template>

<script>
export default {
  name: "VueCanvas",
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0,
    };
  },
  mounted() {
    console.log(this.mouseX);
    var hello = "#141c3c";
    const script = function (p5) {
      var particles = [];

      // var pushed = false;
      // var speed = 2;
      // var posX = 35;
      //   var myColor = 'pink'

      // NOTE: Set up is here
      p5.setup = () => {
        const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent("vue-canvas");
      };
      p5.windowResized = () => {
        const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent("vue-canvas");
      };
      // NOTE: Draw is here
      p5.draw = () => {
        p5.background(p5.color(hello));
        // const degree = p5.frameCount * 3;
        // const y = p5.sin(p5.radians(degree)) * 50;
        // p5.push();
        // p5.translate(0, p5.height / 2);
        // p5.fill(66, 184, 131);
        // p5.stroke(53, 73, 94);
        // p5.strokeWeight(5);
        // p5.ellipse(posX, y, 50, 50);
        // p5.pop();
        // posX += speed;

        // if (posX > p5.width - 35 || posX < 35) {
        //   speed *= -1;
        // }

        particles.push(new Particle(p5.createVector(p5.mouseX, p5.mouseY)));
        for (var i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].paint();
          if (particles[i].isDead()) {
            particles.splice(i, 1);
          }
        }
        // println(particles.length);
      };
      class Particle {
        constructor(_loc) {
          var loc = _loc.copy();
          var vel = p5.createVector(p5.random(-1, 1), p5.random(-2, 0));
          var acc = p5.createVector(0, 0.03);
          var lifespan = 200;
          var h = p5.random(100, 225);
          var sz = p5.random(10, 80);

          // Method to update location
          this.update = function () {
            vel.add(acc);
            loc.add(vel);
            lifespan -= 2;
          };

          // Method to display
          this.paint = function () {
            p5.stroke(30, 175, h, lifespan);
            p5.strokeWeight(1);
            p5.fill(50, 50, h, lifespan);
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
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(script);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vue-canvas {
  position: fixed;
  margin: 0;
  top: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  /* border-radius: 20px; */
  overflow: hidden;
  z-index: -1;
}
#defaultCanvas0 {
  width: 100%;
  height: 100%;
}
.xy {
  font-size: 100px;
  position: absolute;
  z-index: 10000000;
  top: 0;
}
</style>

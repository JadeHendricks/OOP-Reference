const Circle = function() {
  this.draw = function() {
    console.log(this);
  }
};

const c = new Circle();
//method call == Circle
c.draw();

const draw = c.draw;

//function call == window
draw();

//ES6
// Classes are run in strict mode and in stric mode this that points to the widow are delcared as undefined
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
//function called == undefined
draw();
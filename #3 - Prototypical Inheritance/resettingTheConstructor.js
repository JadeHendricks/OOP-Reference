function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
//reseting the constructor
// Always reset the constructor when you reset it's prototype
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

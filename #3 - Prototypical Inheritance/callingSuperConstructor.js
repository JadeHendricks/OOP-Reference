function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

//adding in color
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');

console.log(c);

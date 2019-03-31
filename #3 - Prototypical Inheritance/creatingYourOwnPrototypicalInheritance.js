function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

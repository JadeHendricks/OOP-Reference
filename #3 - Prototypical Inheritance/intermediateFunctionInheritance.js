function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//adding in color
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('draw');
}

function Sqaure(size) {
  this.size = size;
}
extend(Sqaure, Shape);

const s = new Shape();
const c = new Circle(1, 'red');

console.log(c);

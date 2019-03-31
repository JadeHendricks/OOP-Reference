// Each Object will provide a different implementation of the duplicate method
// So we have many forms of the duplicate method. This is what we call Polymorphism
// WHY IS THIS SO POWERFUL?

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {
}
Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}


function Circle() {
}
extend(Circle, Shape);
Circle.prototype.duplicate = function() {
  console.log('Duplicate Cirlce');
}

function Square() {

}
extend(Square, Shape);
Square.prototype.duplicate = function() {
  console.log('Duplicate Square');
}
/***************************************************************
 * *************************************************************
 * *************************************************************
 */

const shapes = [
  new Circle(),
  new Square()
];

// NOW EVERYTIME we call duplicate something completely different will happen
for (let shape of shapes) {
  shape.duplicate();
}

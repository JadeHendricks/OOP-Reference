function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

//adding in color
function Circle() {
}

extend(Circle, Shape);

//this needs to be done after the extend function gets called to 
// Overwride the duplicate method from Shape
Circle.prototype.duplicate = function() {
  console.log('Duplicate Cirlce');
}

// This is how you would call the methid on Circle.proto and Shape.proto
// Circle.prototype.duplicate = function() {
//   Shape.prototype.duplicate.call(this);
//   console.log('Duplicate Cirlce');
// }


const c = new Circle();

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);

//dot notation
circle.location = {x: 1};

//bracket notation
circle['field'] = {field: 'westSide'};

//Deleteing a property
delete circle['field'];

console.log(circle);
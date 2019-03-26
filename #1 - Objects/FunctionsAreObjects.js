//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`);

const person = new Circle1(1);
console.log(person.radius);

//this is what happens when you use the new keyword
// we set this to a new empty object and pass in the arguments
Circle.call({}, 1);
//const another = new Circle(1);


// Returns the name of the function
console.log(Circle.name);
// Returns the length of everything inside the function
console.log(Circle.length);
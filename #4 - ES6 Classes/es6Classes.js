//ES5
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   }
// }

//ES6
class Circle {
  constructor(radius) {
      this.radius;
      //on the object
      this.move = function() {}
  }
  //on the prototype
  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
// Factory Function
function createCirlce(radius) {
  return {
    radius: radius,
  }
}

const circle = createCirlce(1);
console.log(circle.constructor);


//Constructor Function
function Circle(radius) {
  this.radius = radius;
}

const another = new Circle(1);
console.log(another.constructor);
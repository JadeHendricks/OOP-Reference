class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //instance method
  draw() {}
  //static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse("{'radius': 1}");
console.log(circle);

// Another Example
//this is how we would re-write the Math Object in ES6 Classes
class Math2 {
  static abs(value) {

  }
}

Math2.abs(200);
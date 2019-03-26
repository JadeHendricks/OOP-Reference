//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(1);

// this will return all the keys and values of everything that isnnot a function
for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

// this will return an array of keys to us. However, we are not able to seperate properties from mthods
const keys = Object.keys(circle);
console.log(keys);

// this will let us know if a object has a key or method called radius
if ('radius' in circle) {
  console.log('Circle has a radius');
}
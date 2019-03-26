//First options, but this can be cleaner
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0};

  this.getDefaultLocation = function () {
    return defaultLocation;
  }
}

const circle = new Circle(10);
circle.getDefaultLocation();


/* 
=============================================================================================================================================================== 
===============================================================================================================================================================
===============================================================================================================================================================
===============================================================================================================================================================
*/


//Second Option Using Getter and Setters
function Circle2(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0};

  Object.defineProperty(this, 'defaultLocation', 
    {
      get: function() {
        return defaultLocation;
      },
      set: function (value) {
        if (!value.x || !value.y) {
          throw new Error('invalid location.');
        }
        defaultLocation = value;
      }
    }
  )
}

const circle2 = new Circle2(10);
console.log(circle2.defaultLocation = { x: 1, y: 1}); //this will chance the defaultLocation on the outide but not the inside.
console.log(circle2.defaultLocation = 1); // this will fail the validation check

//Abstraction
// We need to hide the details and only show essentails
// Keep all the interal fcuntions hidden and only show draw and radius to the public (DVD Player Reference)

//THIS IS THE ISSUE, EVERYTHING IS VISIBLE
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = {x: 0, y: 0};
  this.computeOptimumLocation = function() {
    //....
  }
  this.draw = function() {
    this.computeOptimumLocation();
    console.log('draw');
  }
}

const another = new Circle(1);
another.draw();

/* 
=============================================================================================================================================================== 
===============================================================================================================================================================
===============================================================================================================================================================
===============================================================================================================================================================
*/

//THIS IS THE SOLUTION
function Circle1(radius) {
  this.radius = radius;
  //Adding these to variables will not make it part of the object. As it is not being set with this
  //There are not available outside of this function
  let = defaultLocation = {x: 0, y: 0};
  let computeOptimumLocation = function() {
    //....
  }
  this.draw = function() {
    //this works because of closures
    computeOptimumLocation(0.1);
    //this.radius
    //defaultLocation
    console.log('draw');
  }
}

const another1 = new Circle1(1);
another1.draw();
console.log(another1); //this will only show us radius and darw
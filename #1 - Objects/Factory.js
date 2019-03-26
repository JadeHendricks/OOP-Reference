// Factory Function
function createCirlce(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log(`draw ${this.radius}`);
    }
  }
}

//Now we can create objects on the fly based off the factory function
const circle = createCirlce(1);
const circleBigger = createCirlce(2);

circle.draw();
circleBigger.draw();

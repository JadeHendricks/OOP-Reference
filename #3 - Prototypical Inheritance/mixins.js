//the rest operator will collect all the arguments and turn them into an array
function mixin(target, ...sources) {
  //now we use the spread operator to spread an array into multiple arguments
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating')
  }
};

const canWalk = {
  walk: function() {
    console.log('walking')
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming')
  }
};

function Person() {}
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);


function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);

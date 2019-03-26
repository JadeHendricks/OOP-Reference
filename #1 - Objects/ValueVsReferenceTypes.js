//Value Type
let number = 10;

function increase(number) {
  number++;
}

increase(number);
//this will return because we are making a copy of the exact value and number++  does not have access to it
console.log(number);


//Reference Type
let obj = {value: 10};

function increase(obj) {
  obj.value++;
}

increase(obj);
//this will return 11 because obj.value++ is finding the location and updating the value in that location
console.log(obj);
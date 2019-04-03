const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    //symbol property
    this[_radius] = radius;
  }
  //symbol method
  [_draw]() {

  }
}
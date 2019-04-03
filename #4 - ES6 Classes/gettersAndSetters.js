class Cirlce {
  constructor(radius) {
    this.radius = radius;
  }
  
  get radius() {
    return this.radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error('invalid radius');
    this.radius = value;
  }
}
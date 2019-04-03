class Shape {
	constructor(color) {
		this.color = color;
	}
	move(){
    console.log('Moving');
	}
}

class Cirlce extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}
	draw(){
    console.log('Drawing');
  }
}

const c = new Cirlce('red', 1);

class Shape {
	move(){
    console.log('Moving');
	}
}

class Cirlce extends Shape {
	move(){
    super.move();
    console.log('Moving again');
  }
}

const c = new Cirlce('red', 1);

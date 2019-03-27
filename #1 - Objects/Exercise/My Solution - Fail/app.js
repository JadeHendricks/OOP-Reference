function Stopwatch (duration) {

  let running = false;
  
  this.duration = duration;
  this.start = function () {
    if (running) {
      setInterval(function(){ this.duration++ }, 1000);
    } else {
      new ERROR ('Stopwatch has already started');
    }
  }
  this.end = function () {
    if (running) {
      return this.start;
    } else {
      new ERROR ('Stopwatch has already started');
    }
  }
  this.reset = function () {

  }
}



const sw = new Stopwatch(0);
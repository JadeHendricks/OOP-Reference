function Stopwatch() {
  //Local variables set
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    //if running is true
    if (running) { 
      //if the stopwatch is running throw a new error
      throw new Error('Stopwatch has already started.');
    } else {
      // set running to true
      running = true;
      //set startime to the current date time
      startTime = new Date();
    }
  }

  this.stop = function() {
    //if running is not true
    if (!running) {
      //if the stopwatch is not running throw a new error
      throw new Error('Stopwatch has not started.');
    } else {
      // set running to false
      running = false;
      //set endTime to the current date time
      endTime = new Date();

      // Calculate the seconds between the endTime and startTime
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      // Not we update the variable with the new values
      duration += seconds;
    }

  }
  // We reset the values to their initial value
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration',{
    //this returns a local variable inside of the function
    get: function() {return duration;}
  })

}

const sw = new Stopwatch();
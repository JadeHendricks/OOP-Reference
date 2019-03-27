function Stopwatch() {
  let running, startTime, endTime, duration = 0;

  this.start = function() {
    if (running) 
      throw new Error('The stopwatch is already running');

      running = true;
      startTime = new Date();
  }
  this.stop = function() {
    if (!running)
      throw new Error('The stopwatch is not running');

      running = false;
      endTime = new Date();

    const calculateTime = (endTime.getSeconds() - startTime.getSeconds());
    duration += calculateTime;
  }
  this.reset = function() {
    running = false;
    startTime = null;
    endTime = null;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function(){
      return duration;
    },
    set: function(value) {
      if (typeof value !== 'number')
        throw new Error('This is not a number!');

        duration = value;
    }
  });

}

const sw = new Stopwatch();
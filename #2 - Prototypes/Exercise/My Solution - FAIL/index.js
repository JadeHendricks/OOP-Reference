function Stopwatch() {
  let running, startTime, endTime, duration = 0;

  this.getVariables = function() {
    running
    startTime
    endTime
    duration = 0
  }

}

Stopwatch.prototype.start = function() {
  this.getVariables();
  if (running) {
    throw new Error('The Stopwatch is already running.')
  } else {
    running = true;
    startTime = new Date();
  }
}

Stopwatch.prototype.stop = function() {
  this.getVariables();
  if (!running) {
    throw new Error('The Stopwatch is not running.')
  } else {
    running = false;
    endTime = new Date();
  }

  const totalTime = (endTime.getTime() - startTime.getTime()) / 1000;
  duration = totalTime;
}

Stopwatch.prototype.restart = function() {
  this.getVariables();
  running = false;
  duration = 0;
  startTime = null;
  endTime = null;
}



const time = new Stopwatch();
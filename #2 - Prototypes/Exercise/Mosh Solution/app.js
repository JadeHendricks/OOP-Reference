function Stopwatch() {
  let running, startTime, endTime, duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() {return duration;},
    //this is a terrible idea, because now we can access the duration property in the public scope
    set: function(value) {duration = value}});
  Object.defineProperty(this, 'startTime', {get: function() {return startTime;}});
  Object.defineProperty(this, 'endTime', {get: function() {return endTime;}});
  Object.defineProperty(this, 'running', {get: function() {return running;}});
}

Stopwatch.prototype.start = function() {
  if (this.running) {
    throw new Error('The Stopwatch is already running.')
  } else {
    this.running = true;
    this.startTime = new Date();
  }
}

Stopwatch.prototype.stop = function() {
  if (!this.running) {
    throw new Error('The Stopwatch is not running.')
  } else {
    this.running = false;
    this.endTime = new Date();
  }

  const totalTime = (endTime.getTime() - startTime.getTime()) / 1000;
  this.duration += totalTime;
}

Stopwatch.prototype.restart = function() {
  this.running = false;
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
}

//this is a terrible idea, because now we can access the duration property in the public scope
// Premature optimization is the root of all evils
const time = new Stopwatch();
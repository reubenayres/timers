console.log("timers and stopwatches");

// using setInterval make it so that you see a count starting at zero 
// in your console and printing the next integer every second

// research clearInterval and make it so that the counter counts to 
// 10 and then stops

// move everything out of the global scope into an object called timer
// timeElapsed should be a property on that object
// and the rest of the code should be in a start() method.
// you should be able to start the timer from your console timer.start()

// instead of timer automatically stopping at 10, make stop() method
// that stops the timer

// extra challenge: Without using Date, output should be formatted like 
// hh:mm:ss instead of just a number of seconds

const timer = {
  timeElapsed: 0,
  start: function() {
    console.log(this.timeElapsed);
    const intervalID = setInterval(() => {
      this.timeElapsed++
      console.log(this.timeElapsed);
      if(this.timeElapsed === 10) {
        clearInterval(intervalID)
      }
    }, 1000)    
  }
}




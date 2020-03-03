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
  /// these properties are the STATE of your application
  // anything you need to KEEP TRACK OF goes here
  // anything here is accessible in every method on this obj
  intervalID: null, 
  timeElapsed: 359,

  start: function() {
    this.printTime()
    this.intervalID = setInterval(() => {
      this.timeElapsed++
      this.printTime()
    }, 1000)    
  }, 
  stop: function() {
    clearInterval(this.intervalID)
  }, 
  printTime: function() {
    const seconds = this.timeElapsed

    let mm = Math.floor(seconds/60)
    // console.log(mm); //

    let ss = seconds - (mm * 60)

    if(ss < 10) {
      ss = "0" + ss  // type coercion -- will convert to string
    }

    console.log(`${mm}:${ss}`);

    // hh:mm:ss
  }
}




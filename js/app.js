console.log("timers and stopwatches");

// using setInterval make it so that you see a count starting at zero 
// in your console and printing the next integer every second

// research clearInterval and make it so that the counter counts to 
// 10 and then stops

// move everything out of the global scope into an object called timer
// timeElapsed should be a property on that object
// and the rest of the code should be in a start() method.
// you should be able to start the timer from your console timer.start()

let timeElapsed = 0
console.log(timeElapsed);
const intervalID = setInterval(() => {
  timeElapsed++
  console.log(timeElapsed);
  if(timeElapsed === 10) {
    clearInterval(intervalID)
  }
}, 1000)


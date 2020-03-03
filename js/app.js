console.log("timers and stopwatches");

// using setInterval make it so that you see a count starting at zero 
// in your console and printing the next integer every second

let timeElapsed = 0
console.log(timeElapsed);
setInterval(() => {
  timeElapsed++
  console.log(timeElapsed);
}, 1000)
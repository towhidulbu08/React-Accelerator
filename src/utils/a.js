// function receive(b, onReceive) {
//   return b.onReceive();
// }

// const result = receive({
//   a: 2,
//   b: 3,
//   onReceive() {
//     console.log("abir");
//   },
// });

// //console.log(result);

// let num = [1, 2];
// const [a, b] = num;

// console.log(a, b);

const startTime = performance.now();

// Your code or operations here...

const endTime = performance.now();
const elapsedTime = endTime - startTime;

// Using Date constructor to convert milliseconds to a Date object
const dateObject = new Date(elapsedTime);

// Extracting individual components
const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
const hours = dateObject.getUTCHours();
const minutes = dateObject.getUTCMinutes();
const seconds = dateObject.getUTCSeconds();

console.log("Elapsed time:");
console.log(`${days} days`);
console.log(`${hours} hours`);
console.log(`${minutes} minutes`);
console.log(`${seconds} seconds`);

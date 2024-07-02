const a = [1, 2, 3];
const insetId = 1;

const b1 = [...a.slice(insetId)];
const b2 = a.slice(insetId);
// b will be an array remember
console.log(b1, b2);

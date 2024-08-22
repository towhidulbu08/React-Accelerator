export function getRndInteger(min, max) {
  const range = max - min;
  const random = Math.random();
  return Math.floor(random * (range + 1)) + min;
}

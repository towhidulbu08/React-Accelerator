for (let index = 0; index < 5; index++) {
  const timestamp = Date.now();
  // console.log(timestamp);
  const date = new Date(timestamp);
  const readableDate = date.toLocaleString(); // Converts the date to a human-readable string
  console.log(readableDate);
}

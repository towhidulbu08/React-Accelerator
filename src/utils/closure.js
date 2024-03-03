function outerFunction() {
  let object = {
    name: "tamim",
    roll: 34,
  };

  function innerFunction() {
    return object;
  }

  return innerFunction;
}

// Create a closure by calling outerFunction and storing the result in a variable
let closureExample = outerFunction();

// Call the inner function, which still has access to outerVariable
console.log(closureExample());

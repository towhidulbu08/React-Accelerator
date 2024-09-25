function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
        console.log(result);
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
        console.log(reason);
      }
    );
    throw promise;
  }
}

export default use;

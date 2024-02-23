// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = () => {
    setCount(count + increment);
  };

  useEffect(() => {
    const id = setInterval(onTick, 3000);
    console.log("hello");

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => setIncrement(increment - 1)}
        >
          –
        </button>
        <b>{increment}</b>
        <button onClick={() => setIncrement(increment + 1)}>+</button>
      </p>
    </>
  );
}

// export default function Age() {
//   const [age] = useState(10);

//   useEffect(() => {
//     alert("Your age is: ", age);
//   }, []);
// }

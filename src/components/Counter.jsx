import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const interValRef = useRef(null);
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    // clearInterval(interValRef.current);

    interValRef.current = setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(interValRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}

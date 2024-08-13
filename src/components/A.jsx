import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  // This function is called during the render
  if (count === 0) {
    setCount(1); // This triggers an update
  }

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

import { useState } from "react";
import MyComponent from "./components/MyComponent";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <MyComponent />
      {/* <div>
        <button onClick={() => setShow((s) => !s)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <ChatRoom />} */}
    </>
  );
}

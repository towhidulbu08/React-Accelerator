import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <MyComponent /> */}
      <div>
        <button onClick={() => setShow((s) => !s)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <ChatRoom />}
    </>
  );
}

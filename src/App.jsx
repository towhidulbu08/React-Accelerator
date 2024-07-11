import { useState } from "react";
import Mirror from "./components/Mirror";
import "./styles.css";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <div>
      <Mirror messageColor={color} />
      <br />
      <button
        onClick={() => {
          setColor("yellow");
        }}
      >
        Change Color From Parent
      </button>
    </div>
  );
}

export default App;

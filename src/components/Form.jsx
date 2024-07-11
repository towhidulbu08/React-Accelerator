import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      class: "input",
    },
  ]);

  function handleAddInput() {
    setInputs([
      ...inputs,
      { id: inputs[inputs.length - 1].id + 1, class: "input" },
    ]);
  }

  return (
    <div>
      {inputs.map((input) => (
        <div style={{ marginBottom: "4px" }} key={input.id}>
          <input type="text" label={input.class} />
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}

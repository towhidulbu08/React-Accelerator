import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          onAddTask(value);
          setValue("");
        }}
      >
        Add
      </button>
    </>
  );
}

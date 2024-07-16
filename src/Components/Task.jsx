/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Task({ task, onChangeTask, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let texContent;
  if (isEditing) {
    texContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />

        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    texContent = (
      <>
        {task.text}
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {texContent}

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}

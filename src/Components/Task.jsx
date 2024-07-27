/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTaskDispatch } from "../Contexts/TasksContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useTaskDispatch();

  let texContent;
  if (isEditing) {
    texContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
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
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked },
          });
        }}
      />
      {texContent}

      <button
        onClick={() =>
          dispatch({
            type: "deleted",
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </label>
  );
}

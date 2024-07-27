import { useState } from "react";
import { useTaskDispatch, useTasks } from "../Contexts/TasksContext";
import getNextId from "../utils/getNextId";

export default function AddTask() {
  const [value, setValue] = useState("");

  const tasks = useTasks();
  // console.log(tasks);

  const dispatch = useTaskDispatch();
  //console.log(dispatch);
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text: value,
            id: getNextId(tasks),
          });
          setValue("");
        }}
      >
        Add
      </button>
    </>
  );
}

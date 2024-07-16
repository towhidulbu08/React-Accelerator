/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task onDelete={onDelete} onChangeTask={onChangeTask} task={task} />
        </li>
      ))}
    </ul>
  );
}

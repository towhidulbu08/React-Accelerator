import { useState } from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskLists";
import initialTasks from "./Data/data";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    // let currentLastId = tasks[tasks.length - 1].id;
    // let nextId = currentLastId++;
    // let Done = !tasks[tasks.length - 1].done;

    const getId = (data) => {
      const maxId = data.reduce((prev, curr) =>
        prev.id > curr.id ? prev.id : curr.id
      );
      return maxId + 1;
    };
    const nextId = getId(tasks);
    setTasks([
      ...tasks,
      {
        id: nextId,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        onDelete={handleDeleteTask}
        onChangeTask={handleChangeTask}
        tasks={tasks}
      />
    </>
  );
}

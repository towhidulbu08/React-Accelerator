/* eslint-disable no-undef */
import { useImmerReducer } from "use-immer";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskLists";
import initialTasks from "./Data/data";
import taskReducer from "./Reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const getId = (data) => {
    const maxId = data.reduce((prev, curr) =>
      prev.id > curr.id ? prev.id : curr.id
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getId(tasks),
    }); //added
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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

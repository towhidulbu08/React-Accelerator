/* eslint-disable no-undef */
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskLists";
import TasksProvider from "./Contexts/TasksContext";

export default function App() {
  return (
    <>
      <TasksProvider>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}

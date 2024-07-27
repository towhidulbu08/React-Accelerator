import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import initialTasks from "../Data/data";
import taskReducer from "../Reducers/taskReducer";

export const TasksContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

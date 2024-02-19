import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  //Nueva funcion
  function createTask(task) {
    //copia el arreglo tasks con ... y le suma los nuevos tasks
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask({ taskId }) {
    //evalua si el ID es es igual al que recibe
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContext;

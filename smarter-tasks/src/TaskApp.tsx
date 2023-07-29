import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState({
      tasks: [
        ...taskAppState.tasks,
        { ...task, id: String(new Date().getTime()) },
      ],
    });
  };

  const deleteTasks = (id: number) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task, index) => index !== id),
    });
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={taskAppState.tasks} deleteTasks={deleteTasks} />
    </div>
  );
};

export default TaskApp;

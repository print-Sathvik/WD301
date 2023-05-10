import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTasks: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        className="deleteTaskButton p-2 rounded bg-red-600 text-white font-bold"
        id="deleteTaskButton"
        onClick={(_) => props.deleteTasks(idx)}
      >
        Delete
      </button>
    </li>
  ));
  return <>{list}</>;
};

export default TaskList;

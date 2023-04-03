import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  render() {
    return (
      <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-md mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Get Internship (from GDC)
        </h1>
        <div className="container max-w-md mx-auto shadow-md bg-white">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }

  addTask = (task: TaskItem) => {
    this.setState((state, props) => {
      return {
        tasks: [...state.tasks, task],
      }
    })
  }
  
}

export default TaskApp;

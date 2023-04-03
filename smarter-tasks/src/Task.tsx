import React from "react";

interface TaskProp {
  title: string
  dueDate: string
  description: string
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100 my-4">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm">{this.props.dueDate}</p>
        <p className="text-sm">
          Description: {this.props.description}
        </p>
      </div>
    )
  }
}

export default Task;
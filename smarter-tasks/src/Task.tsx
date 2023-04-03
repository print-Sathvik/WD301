import React from "react";
import './TaskCard.css'

interface TaskProp {
  title: string
  dueDate: string
  description: string
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm">Due Date: {this.props.dueDate}</p>
        <p className="text-sm">
          Description: {this.props.description}
        </p>
      </div>
    )
  }
}

export default Task;
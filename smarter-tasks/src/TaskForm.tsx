import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string
  dueDate: string
  description: string
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: ""
    }
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description
    }
    if(newTask.title.trim().length === 0) {
      return
    }
    this.props.addTask(newTask);
    this.setState({ title: "", description:"", dueDate:"" });
  };

  render(){
    return (
      <form onSubmit={this.addTask}>
        <input type="text" value={this.state.title} onChange={this.titleChanged}/>
        <textarea id="todoDescription" cols={30} rows={4} value={this.state.description} onChange={this.descriptionChanged}></textarea>
        <input type="date" id="todoDueDate" value={this.state.dueDate} onChange={this.dateChanged}/>
        <button type="submit">Add Items</button>
      </form>
    )
  }

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  
}
 export default TaskForm;

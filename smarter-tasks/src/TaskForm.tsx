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
    if(newTask.title.trim().length === 0 || newTask.dueDate.length === 0) {
      return
    }
    this.props.addTask(newTask);
    this.setState({ title: "", description:"", dueDate:"" });
  };

  render(){
    return (
      <form onSubmit={this.addTask}>
        <label htmlFor="title" className="text-left">Title</label>
        <input type="text" name="title" className="border-2 rounded w-full text-base p-2 my-2 border-blue-200" value={this.state.title} onChange={this.titleChanged}/>
        <label htmlFor="todoDescription">Description</label>
        <textarea id="todoDescription" cols={30} rows={3} value={this.state.description} onChange={this.descriptionChanged} className="border-2 w-full my-3 border-blue-200" />
        <label htmlFor="todoDueDate">Due Date</label>
        <input type="date" id="todoDueDate" value={this.state.dueDate} onChange={this.dateChanged} className="border-2 w-full my-3 text-base p-2 border-blue-200"/>
        <button type="submit" id="addTaskButton" className="w-full text-white bg-blue-600 hover:bg-blue-800 rounded py-2 px-2 font-bold">Add Items</button>
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

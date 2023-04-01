import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  //Either the completedAtDate or dueDate will be empty string
  title: string,
  completedAtDate: string,
  dueDate: string,
  assigneeName: string
}

function App(): JSX.Element {
  
  const task1: Task = {title: "Learn React", completedAtDate:"", dueDate: "29-3-2023", assigneeName: "Pupilfirst"}
  const task2: Task = {title: "Master Typescript", completedAtDate:"", dueDate: "30-04-2023", assigneeName: "CBIT college"}
  const task3: Task = {title: "TCC Assignment", completedAtDate:"", dueDate: "02-04-2023", assigneeName: "Krishna sir"}

  const task4: Task = {title: "Prescreening project", completedAtDate:"06-03-2023", dueDate: "", assigneeName: "GDC"}
  const task5: Task = {title: "Complete WD201", completedAtDate:"24-01-2023", dueDate: "", assigneeName: "Pupilfirst"}
  const task6: Task = {title: "Capstone Project", completedAtDate:"17-01-2023", dueDate: "", assigneeName: "Sathvik"}
  const task7: Task = {title: "Interview", completedAtDate:"23-03-2023", dueDate: "", assigneeName: "GDC"}


  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Smarter Tasks</h1>
      <h2 className="ml-20 pl-5 pt-3 text-lg"><span className="font-bold">Internship:</span> Activities to get an internship</h2>
      <div className="flex">
        <div className="flex-1 m-5 ml-20 border-solid border-4 border-black rounded-xl bg-red-50">
          <h1 className="text-2xl font-bold text-center m-3">Pending</h1>
          <TaskCard task = {task1}/>
          <TaskCard task = {task2}/>
          <TaskCard task = {task3}/>
          <div className="p-5">
            <button className="w-full text-white bg-blue-400 hover:bg-blue-800 rounded py-2 px-2 font-bold text-left">+ New Task</button>
          </div>
        </div>
        <div className="flex-1 m-5 mr-20 border-solid border-4 border-black rounded-xl bg-green-50">
          <h1 className="text-2xl font-bold text-center m-3">Done</h1>
          <TaskCard task = {task4}/>
          <TaskCard task = {task5}/>
          <TaskCard task = {task6}/>
          <TaskCard task = {task7}/>
        </div>
      </div>
    </div>
  );
}

export {App as default, Task};

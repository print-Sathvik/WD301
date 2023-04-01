import React from 'react';
import './TaskCard.css'
import {Task} from './App'

const TaskCard = (props:{task:Task}): JSX.Element => {
  //any one of User.dueDate or User.completedDate will be empty string.
  //So if User.dueDate exists then User.completedDate is empty and task is not completed, otherwise completed
  if(props.task.dueDate){
    return (
      <div className='TaskItem m-4 hover:scale-[1.03] hover:border-blue-500'>
        <h2 className="text-xl font-bold">{props.task.title}</h2>
        <p>Due on: {props.task.dueDate}</p>
        <p>Assignee: {props.task.assigneeName}</p>
      </div>
    )
  } else {
    return (
      <div className='TaskItem m-4 hover:scale-[1.03] hover:border-blue-500'>
        <h2 className='text-xl font-bold'>{props.task.title}</h2>
        <p>Completed on: {props.task.completedAtDate}</p>
        <p>Assignee: {props.task.assigneeName}</p>
      </div>
    )
  }
}

export default TaskCard;
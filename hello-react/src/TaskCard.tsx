import React from 'react';
import './TaskCard.css'

const TaskCard = (props:{title:String, dueDate?:String, completedAtDate?:String , assigneeName:String}): JSX.Element => {
  //any one of User.dueDate or User.completedDate will be empty string.
  //So if User.dueDate exists then User.completedDate is empty and task is not completed, otherwise completed
  if(props.dueDate){
    return (
      <div className='TaskItem m-4 hover:scale-[1.03] hover:border-blue-500'>
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  } else {
    return (
      <div className='TaskItem m-4 hover:scale-[1.03] hover:border-blue-500'>
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  }
}

export default TaskCard;
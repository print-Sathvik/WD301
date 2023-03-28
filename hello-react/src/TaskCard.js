import './TaskCard.css'

const TaskCard = (props) => {
  //any one of dueDate or completedDate will be present in props.
  //So if props.dueDate exists then it is not completed, otherwise completed
  if(props.dueDate){
    return (
      <div className='TaskItem m-4'>
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  } else {
    return (
      <div className='TaskItem m-4'>
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  }
}

export default TaskCard;
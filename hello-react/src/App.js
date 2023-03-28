import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Smarter Tasks</h1>
      <h2 className="ml-20 pl-5 pt-3 text-lg"><span className="font-bold">Internship:</span> Activities to get an internship</h2>
      <div className="flex">
        <div className="flex-1 m-5 ml-20 border-solid border-4 border-black rounded-xl">
          <h1 className="text-2xl font-bold text-center m-3">Pending</h1>
          <TaskCard title="Learn React" dueDate="30-4-2023" assigneeName="Pupilfirst"/>
          <TaskCard title="Submit L1 milestone" dueDate="29-3-2023" assigneeName="Coach"/>
          <TaskCard title="Master Typescript" dueDate="30-4-2023" assigneeName="CBIT college"/>
        </div>
        <div className="flex-1 m-5 mr-20 border-solid border-4 border-black rounded-xl">
          <h1 className="text-2xl font-bold text-center m-3">Done</h1>
          <TaskCard title="Complete WD201" completedAtDate="24-01-2023" assigneeName="Pupilfirst"/>
          <TaskCard title="Capstone Project" completedAtDate="17-01-2023" assigneeName="Sathvik"/>
          <TaskCard title="Prescreening project" completedAtDate="06-03-2023" assigneeName="GDC"/>
          <TaskCard title="Interview" completedAtDate="23-03-2023" assigneeName="GDC"/>
        </div>
      </div>
    </div>
  );
}

export default App;

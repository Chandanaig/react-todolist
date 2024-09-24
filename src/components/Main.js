import React from "react";

function Main({ tasks, handleTaskChange }) {
  const incompleteTasks = tasks.filter(task => !task.completed);

  return (
    <main className="main">
      <button onClick={() => console.log("Completed task button clicked")}>
        Completed task
      </button>
      <button onClick={() => console.log("Incompleted task button clicked")}>Incomplete task
        </button>

      <h4>List</h4>
      {incompleteTasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskChange(task.id)}
          />
          {task.name}
        </div>
      ))}
    </main>
  );
}

export default Main;

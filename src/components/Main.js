import React, { useState } from "react";

function Main({ tasks, handleTaskChange }) {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // Show all tasks
  });

  return (
    <main className="main">
      <div className="filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>
      {filteredTasks.map((task) => (
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

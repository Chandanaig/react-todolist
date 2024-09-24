import React, { useState } from "react";

function Footer({ addTask, tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    }
  };

 
  return (
    <footer className="footer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="New task name"
        />
        <button type="submit">Add Task</button>
      </form>
      
    </footer>
  );
}

export default Footer;
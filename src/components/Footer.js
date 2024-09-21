import React, { useState } from 'react';

function Footer() {
  const [taskName, setTaskName] = useState('');

  const addTask = (name) => {
    console.log('Task added:', name); // Replace this with your logic to add the task
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask(taskName);
      setTaskName('');
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

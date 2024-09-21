import React, { useState } from 'react';

function Main() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: true },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false },
  ]);

  const handleTaskChange = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <main className="main">
      {tasks.map(task => (
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
import React, { useState } from "react";
import TaskCard from "TaskCard";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Set up MongoDB", completed: true },
  ]);

  const handleTaskToggle = (id: number, completed: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed } : task))
    );
  };

  return (
    <div>
      <h1>My PMS Tasks</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleTaskToggle} />
      ))}
    </div>
  );
};

export default App;

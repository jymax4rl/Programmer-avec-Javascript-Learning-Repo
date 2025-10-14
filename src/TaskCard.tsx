// TaskCard.tsx (using TypeScript for types)
import React, { useState } from "react";

// Define a TypeScript interface for the task prop (type safety!)
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  onToggle: (id: number, completed: boolean) => void; // Function prop to update parent
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed); // Local state

  const handleToggle = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    onToggle(task.id, newStatus); // Call parent function
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>{task.title}</h3>
      <input type="checkbox" checked={isCompleted} onChange={handleToggle} />
      <span> {isCompleted ? "Done!" : "Pending"}</span>
    </div>
  );
};

export default TaskCard;

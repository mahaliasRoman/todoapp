import React, { useState } from 'react';
import '../styles/TaskListItem.css';

interface TaskListItemProps extends React.PropsWithChildren {
  taskId: number;
  onRemoveTask: (taskId: number) => void;
}

export default function TaskListItem({
  taskId,
  children,
  onRemoveTask,
}: TaskListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onRemoveTask(taskId);
  };

  return (
    <li
      className={`task-list-item ${isChecked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      {children}
      <span className="checkbox">
        <span className="checkmark">✓</span>
      </span>
      <button className="remove-btn" onClick={handleRemove}>
        X
      </button>
    </li>
  );
}

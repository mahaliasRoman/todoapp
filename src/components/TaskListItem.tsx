import React, { useEffect, useState } from 'react';
import '../styles/TaskListItem.css';

type TaskListItemProps = React.PropsWithChildren & {
  taskId: number;
  onRemoveTask: (taskId: number) => void;
  isChecked: boolean;
  onToggleCompletion: (taskId: number) => void;
};

export default function TaskListItem({
  taskId,
  children,
  onRemoveTask,
  isChecked,
  onToggleCompletion,
}: TaskListItemProps) {
  const [localChecked, setLocalChecked] = useState(isChecked);

  useEffect(() => {
    setLocalChecked(isChecked); // Sync local checked state with props
  }, [isChecked]);

  const handleToggle = () => {
    setLocalChecked(!localChecked);
    onToggleCompletion(taskId);
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

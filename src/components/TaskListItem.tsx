import React, { useEffect, useState } from 'react';
import '../styles/TaskListItem.scss';
import CheckmarkIcon from './icons/CheckmarkIcon';
import CloseIcon from './icons/CloseIcon.tsx';

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
    setLocalChecked(isChecked);
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
      <CheckmarkIcon
        color={isChecked ? '#4caf50' : '#ccc'}
        className="checkmark-icon"
      />

      <button onClick={handleRemove} className="remove-btn">
        <CloseIcon
          className="close-icon"
          color={isChecked ? '#ff0000' : '#A9A9A9'}
        />
      </button>
    </li>
  );
}

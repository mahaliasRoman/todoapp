import { useState } from 'react';
import '../styles/TaskListItem.css';

export default function TaskListItem({ children }: React.PropsWithChildren) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
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
    </li>
  );
}

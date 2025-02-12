import React from 'react';
import '../styles/AddTask.scss';

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) return;

    onAddTask(trimmedTaskName);
    setTaskName('');
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <label className="sr-only" htmlFor="task-input">
          Add Task:
        </label>
        <input
          autoComplete="off"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          id="task-input"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}

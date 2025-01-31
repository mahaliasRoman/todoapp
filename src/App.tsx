import React from 'react';
import { Task } from './types.ts';
import AddTask from './AddTask.tsx';
import TaskList from './TaskList.tsx';
import TaskListItem from './TaskListItem.tsx';
import TaskListHeader from './TaskListHeader.tsx';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false },
    ]);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To do today:</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;

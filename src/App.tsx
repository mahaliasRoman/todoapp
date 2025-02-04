import { useState, useEffect } from 'react';
import { Task } from './types.ts';
import AddTask from './components/AddTask.tsx';
import TaskList from './components/TaskList.tsx';
import TaskListItem from './components/TaskListItem.tsx';
import TaskListHeader from './components/TaskListHeader.tsx';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false },
    ]);
  };

  const onRemoveTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const onToggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  const doneTasksCount = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className="todo-container">
      <h1 className="todo-header">My to do list:</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList
        header={
          <TaskListHeader count={tasks.length} doneCount={doneTasksCount} />
        }
      >
        {tasks.map((task) => (
          <TaskListItem
            taskId={task.id}
            onRemoveTask={() => onRemoveTask(task.id)}
            key={task.id}
            isChecked={task.isCompleted}
            onToggleCompletion={onToggleTaskCompletion}
          >
            {task.title}
          </TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;

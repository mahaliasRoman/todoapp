import { useSelector, useDispatch } from 'react-redux';
import {
  addTask,
  removeTask,
  toggleTaskCompletion,
} from './store/reducers/todoSlice';
import AddTask from './components/AddTask.tsx';
import TaskList from './components/TaskList.tsx';
import TaskListItem from './components/TaskListItem.tsx';
import TaskListHeader from './components/TaskListHeader.tsx';
import './styles/App.css';
import { RootState } from './store/store';

function App() {
  const tasks = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const onAddTask = (taskName: string) => {
    dispatch(addTask({ id: Date.now(), title: taskName, isCompleted: false }));
  };

  const onRemoveTask = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  const onToggleTaskCompletion = (taskId: number) => {
    dispatch(toggleTaskCompletion(taskId));
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
            onToggleCompletion={() => onToggleTaskCompletion(task.id)}
          >
            {task.title}
          </TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;

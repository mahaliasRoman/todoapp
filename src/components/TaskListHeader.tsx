import '../styles/TaskListHeader.css';
type TaskListHeaderProps = {
  count: number;
};

export default function TaskListHeader({ count }: TaskListHeaderProps) {
  return (
    <>
      <h2 className="todo-counter">Total Tasks: ({count})</h2>
    </>
  );
}

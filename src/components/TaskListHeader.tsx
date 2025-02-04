import '../styles/TaskListHeader.css';
type TaskListHeaderProps = {
  count: number;
  doneCount: number;
};

export default function TaskListHeader({
  count,
  doneCount,
}: TaskListHeaderProps) {
  return (
    <>
      <h2 className="todo-counter">Total Tasks: ({count})</h2>
      <h3 className="todo-done-counter">Tasks Done: ({doneCount})</h3>
    </>
  );
}

import React from 'react';
import '../styles/TaskList.scss';

type TaskListProps = {
  header?: React.ReactNode;
};

export default function TaskList({
  header,
  children,
}: React.PropsWithChildren<TaskListProps>) {
  return (
    <>
      {header}
      <ul className="task-list">{children}</ul>
    </>
  );
}

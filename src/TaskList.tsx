import React from 'react';

type TaskListProps = {
  header?: React.ReactNode;
};

export default function TaskList({
  header,
  children,
}: React.PropsWithChildren<TaskListProps>) {
  // const [seconds, setSeconds] = React.useState(0);
  //
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 1000);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      {header}
      {/*<p>Seconds passed: {seconds}</p>*/}
      <ul>{children}</ul>
    </>
  );
}

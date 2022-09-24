import React, { useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, getTasks } = useTaskContext();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const taskList = tasks.map((task) => {
    return (
      <div key={task.id}>
        <h3>{task.name}</h3>
        <p>{JSON.stringify(task.done)}</p>
      </div>
    );
  });

  return <>{taskList}</>;
}

export default TaskList;

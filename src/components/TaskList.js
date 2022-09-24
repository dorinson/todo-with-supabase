import React, { useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

function TaskList() {
  const { tasks, getTasks } = useTaskContext();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const taskList = tasks.map((task) => {
    return (
      <div key={task.id}>
        <TaskCard task={task} />
      </div>
    );
  });

  return <>{taskList}</>;
}

export default TaskList;

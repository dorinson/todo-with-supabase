import React, { useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

function TaskList({ done = false }) {
  const { tasks, getTasks, loading } = useTaskContext();

  useEffect(() => {
    getTasks(done);
  }, [done]);

  function render() {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (tasks.length === 0) {
      return <h1>There is no task to show.</h1>;
    } else {
      return tasks.map((task) => {
        return (
          <div key={task.id}>
            <TaskCard task={task} />
          </div>
        );
      });
    }
  }

  return <div>{render()}</div>;
}

export default TaskList;

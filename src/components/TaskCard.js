import React from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask, updateTask, deleting, updating } = useTaskContext();

  function handleDelete() {
    deleteTask(task.id);
  }

  function handleToggleDone() {
    updateTask(task.id, { done: !task.done });
  }

  return (
    <>
      <h3>{task.name}</h3>
      <p>{JSON.stringify(task.done)}</p>
      <div>
        <button onClick={handleDelete} disabled={deleting}>
          {deleting ? 'Deleting...' : 'Delete'}
        </button>
        <button onClick={handleToggleDone}>Done</button>
      </div>
    </>
  );
}

export default TaskCard;

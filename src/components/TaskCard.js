import React from 'react';

function TaskCard({ task }) {
  function handleDelete() {
    console.log('deleting');
  }

  function handleToggleDone() {
    console.log('toggling');
  }

  return (
    <>
      <h3>{task.name}</h3>
      <p>{JSON.stringify(task.done)}</p>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggleDone}>Done</button>
      </div>
    </>
  );
}

export default TaskCard;

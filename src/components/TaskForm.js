import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskForm() {
  const [task, setTask] = useState('');
  const { createTask, adding } = useTaskContext();

  function handleChange(newValue) {
    setTask(newValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    createTask(task);
    setTask('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="taskfrom-tast"
          placeholder="Write the task name"
          onChange={(event) => handleChange(event.target.value)}
          value={task}
        />
        <button type="submit" disabled={adding}>
          {adding ? 'Adding...' : 'Add'}
        </button>
      </form>
    </>
  );
}

export default TaskForm;

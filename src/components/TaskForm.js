import React, { useState } from 'react';
import { supabaseClient } from '../supabase/client';

function TaskForm() {
  const [task, setTask] = useState('');

  function handleChange(newValue) {
    setTask(newValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { id } = supabaseClient.auth.user();
      const newTask = { name: task, userId: id };
      await supabaseClient.from('tasks').insert(newTask);
    } catch (error) {
      console.error(error);
    }
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
        />
      </form>
    </>
  );
}

export default TaskForm;

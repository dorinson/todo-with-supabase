import { createContext, useContext, useState } from 'react';
import { supabaseClient } from '../supabase/client';

export const TaskContext = createContext();

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  } else {
    return context;
  }
}

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function getTasks(done = false) {
    setLoading(true);
    const user = supabaseClient.auth.user();
    const { error, data } = await supabaseClient
      .from('tasks')
      .select()
      .eq('userId', user.id)
      .eq('done', done)
      .order('id', { ascending: false });

    if (error) {
      throw error;
    }

    setLoading(false);
    setTasks(data);
  }

  async function createTask(taskName) {
    setAdding(true);
    try {
      const { id } = supabaseClient.auth.user();
      const { error, data } = await supabaseClient.from('tasks').insert({ name: taskName, userId: id });
      if (error) throw error;
      setTasks([...tasks, ...data]);
    } catch (error) {
      console.error(error);
      throw error;
    }
    setAdding(false);
  }

  async function deleteTask(taskId) {
    setDeleting(true);
    const user = await supabaseClient.auth.user();
    const { error } = await supabaseClient.from('tasks').delete().eq('userId', user.id).eq('id', taskId);
    if (error) {
      console.error(error);
      throw error;
    }
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setDeleting(false);
  }

  async function updateTask(taskId, fields) {
    const user = await supabaseClient.auth.user();
    const { error } = await supabaseClient.from('tasks').update(fields).eq('userId', user.id).eq('id', taskId);
    if (error) {
      console.error(error);
      throw error;
    }
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <TaskContext.Provider value={{ tasks, adding, loading, deleting, getTasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

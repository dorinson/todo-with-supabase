import { createContext, useContext } from 'react';
// import { supabaseClient } from '../supabase/client';

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
  return <TaskContext.Provider value={{ name: 'german' }}>{children}</TaskContext.Provider>;
}

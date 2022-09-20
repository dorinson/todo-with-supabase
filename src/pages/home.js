import { useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../context/TaskContext';
// import { supabaseClient } from '../supabase/client';
// import { useNavigate } from 'react-router-dom';

function Home() {
  const context = useTaskContext();
  // const navigate = useNavigate();

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <h1>Home</h1>
      <TaskForm />
    </>
  );
}

export default Home;

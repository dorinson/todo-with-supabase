import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { supabaseClient } from '../supabase/client';
import TaskList from '../components/TaskList';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabaseClient.auth.user()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => supabaseClient.auth.signOut()}>Logout</button>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default Home;

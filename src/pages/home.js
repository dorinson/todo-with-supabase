import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { supabaseClient } from '../supabase/client';
import TaskList from '../components/TaskList';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [doneTasks, setDoneTasks] = useState(false);

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
      <header>
        <span>{doneTasks ? 'ClosedTasks' : 'Pending Tasks'}</span>
        <button onClick={() => setDoneTasks(!doneTasks)}>{doneTasks ? 'Pending Tasks' : 'ClosedTasks'}</button>
      </header>
      <TaskList done={doneTasks} />
    </>
  );
}

export default Home;

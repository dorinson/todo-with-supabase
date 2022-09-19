// Styles
import './App.css';

// React Modules
import { useEffect } from 'react';

// Third-Party Modules
import { Routes, Route, useNavigate } from 'react-router-dom';

// My Modules
import { supabaseClient } from './supabase/client';

// Pages
import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      console.log('event', event);
      console.log('session', session);

      if (!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
    });
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

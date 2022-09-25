import { useEffect, useState } from 'react';
import { supabaseClient } from '../supabase/client';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleChange(newValue) {
    setEmail(newValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await supabaseClient.auth.signIn({
        email,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    const user = supabaseClient.auth.user();
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="your@email.com"
          onChange={(event) => handleChange(event.target.value)}
        />
        <button>Sing In</button>
      </form>
    </div>
  );
}

export default Login;

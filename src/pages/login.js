import { useState } from 'react';
import { supabaseClient } from '../supabase/client';

function Login() {
  const [email, setEmail] = useState('');

  function handleChange(newValue) {
    setEmail(newValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const result = await supabaseClient.auth.signIn({
        email,
      });
      console.log(`[handleSubmit] [Result]`, result);
    } catch (error) {
      console.error(`[handleSubmit] [Error] ${error}`);
    }
  }

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

import { useState } from 'react';
import { supabase } from '../supabaseClient'; // Import our Supabase client

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up

  const handleAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    try {
      if (isLogin) {
        // --- LOGIN LOGIC ---
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) throw error;
        alert('Logged in successfully!');
      } else {
        // --- SIGN UP LOGIC ---
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
        alert('Check your email for the login link!');
        // Note: We disabled email confirmation, so this is just a placeholder message.
        // In a real app, the user would need to confirm.
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="header">{isLogin ? 'Welcome Back' : 'Create an Account'}</h1>
        <p className="description">
          {isLogin ? 'Sign in to continue' : 'Sign up to start your personalized menu'}
        </p>
        <form onSubmit={handleAuth}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input-field"
              type="email"
              placeholder="Your email address"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input-field"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button-primary" disabled={loading}>
            {loading ? <span>Loading...</span> : <span>{isLogin ? 'Log In' : 'Sign Up'}</span>}
          </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)} className="button-toggle">
          {isLogin ? 'Need an account? Sign Up' : 'Have an account? Log In'}
        </button>
      </div>
    </div>
  );
}
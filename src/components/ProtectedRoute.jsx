import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

// This is a custom hook to get the session easily
function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { session, loading };
}

// The ProtectedRoute component itself
function ProtectedRoute({ children }) {
  const { session, loading } = useSession();

  if (loading) {
    // Show a loading screen while we check for a session
    return <div className="loading-fullscreen">Loading...</div>;
  }

  if (!session) {
    // If no session is found, redirect the user to the home page
    return <Navigate to="/" replace />;
  }

  // If a session exists, render the children (the protected page)
  return children;
}

export default ProtectedRoute;
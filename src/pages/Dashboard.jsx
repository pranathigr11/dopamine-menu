import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
// 1. Import the new component at the top
import CompletionLog from '../components/CompletionLog';

function Dashboard() {
  const [completions, setCompletions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
     async function getCompletions() {
  setLoading(true);
  console.log("Dashboard: Attempting to fetch completions for session:", session); // LOG 1

  if (!session) {
      console.log("Dashboard: No session found, aborting fetch."); // LOG 2
      setLoading(false);
      return;
  }
  
  const { data, error } = await supabase
    .from('completions')
    .select(`
      *,
      activities ( text, image_url )
    `)
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false });
  
  // THIS IS THE MOST IMPORTANT PART
  if (error) {
    console.error("DATABASE ERROR:", error); // LOG 3
  } else {
    console.log("FETCHED DATA:", data); // LOG 4
    setCompletions(data);
  }

  setLoading(false);
}
      getCompletions();
    }
  }, [session]);

  if (loading) {
    return <div className="loading-fullscreen">Loading Dashboard...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Your Dashboard</h1>
        <Link to="/" className="btn-secondary">← Back to Menu</Link>
      </header>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>Total Completions</h2>
          <p className="stat-number">{completions.length}</p>
        </div>
      </div>
       <div className="log-section">
      <CompletionLog completions={completions} />
    </div>
    </div>
  );
}

export default Dashboard;
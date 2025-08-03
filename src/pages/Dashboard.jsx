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





      // Replace the getCompletions function with this one.

async function getCompletions() {
  setLoading(true);
  if (session) {
    // This query now fetches details from BOTH activities tables.
    const { data, error } = await supabase
      .from('completions')
      .select(`
        *,
        activities ( text, image_url ),
        custom_activities ( text, image_url )
      `)
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });
    
    if (!error) {
      setCompletions(data || []);
    } else {
      console.error("Error fetching completions:", error);
    }
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
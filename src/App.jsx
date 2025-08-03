// import { useState, useEffect } from 'react'; // Add useEffect
// import Confetti from 'react-confetti';
// import { initialActivities } from './data.js';
// import ActivityList from './components/ActivityList';
// import CategoryFilter from './components/CategoryFilter';
// import ActivityModal from './components/ActivityModal';
// import AddActivityForm from './components/AddActivityForm';
// import { Routes, Route, Link } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';
// import Auth from './components/Auth'; // We will need this
// import { supabase } from './supabaseClient'; // And this
// import './App.css';

// function App() {
//   const [activities, setActivities] = useState([]); // Start with an empty list
//   const [currentCategory, setCurrentCategory] = useState('All');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [allCategories, setAllCategories] = useState([]);
// const [loading, setLoading] = useState(true);

//   // ... with your other useState hooks
// const [showAddModal, setShowAddModal] = useState(false);
//   // --- NEW AUTH STATE ---
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [session, setSession] = useState(null);

//   // --- NEW: Check for user session on load ---
//   useEffect(() => {
//      setLoading(true);
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//        setLoading(false); 
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       // When user logs in/out, close the auth modal
//       setShowAuthModal(false); 
//       setLoading(false); 
//     });

//     return () => subscription.unsubscribe();
//   }, []);


//   //dynamic button
//   useEffect(() => {
//   async function getCategories() {
//     const { data, error } = await supabase.from('categories').select('*');
//       if (error) {
//         console.error('Error fetching categories:', error);
//       } else {
//         console.log('Fetched categories:', data); // For debugging
//         setAllCategories(data);
//       }
//   }
//   getCategories();
// }, []);
//   // Find the useEffect hook that fetches data

// useEffect(() => {
//   async function loadActivities() {
//     // --- 1. Fetch the SHARED default activities ---
//     // Everyone sees these, so no user filter is needed.
//     const { data: defaultActivities, error: defaultError } = await supabase
//       .from('activities')
//       .select('*, categories ( name, color )')

//     if (defaultError) {
//       console.error('Error fetching default activities:', defaultError);
//       return;
//     }

//     if (session) {
//       // --- 2. If the user is logged in, fetch THEIR custom activities ---
//       const { data: customActivities, error: customError } = await supabase
//         .from('custom_activities')
//         .select('*, categories ( name, color )')
//         .eq('user_id', session.user.id); // Only get activities for this user

//       if (customError) {
//         console.error('Error fetching custom activities:', customError);
//       }
      
//       // --- 3. Combine both lists and set the state ---
//       const allActivities = [
//           ...defaultActivities.map(a => ({ ...a, isCustom: false })), 
//           ...customActivities.map(a => ({ ...a, isCustom: true }))
//         ];
//       setActivities(allActivities.map(a => ({ ...a, completed: false })));

//     } else {
//       // --- 4. If logged out, just show the default list ---
//       setActivities(defaultActivities.map(a => ({ ...a, completed: false, isCustom: false })));
//     }
//   }

//   loadActivities();
// }, [session]); // This effect still runs whenever the login state changes
//   const handleSelectActivity = (activity) => setSelectedActivity(activity);
//   const handleCloseModal = () => setSelectedActivity(null);

//   // const handleToggleComplete = (id) => {
//   //   // This logic will be updated to use the database
//   //   setShowConfetti(true);
//   //   setTimeout(() => setShowConfetti(false), 5000);
//   //   handleCloseModal();
//   // };




//   const handleToggleComplete = async (activity) => {
//   // We only want to log the completion, not un-completion
//   if (activity.completed) return; 

//   // --- 1. LOG THE COMPLETION TO THE DATABASE ---
//   const { error } = await supabase.from('completions').insert({
//     user_id: session.user.id,
//     activity_id: activity.id,
//     // Note: This works because default and custom activity IDs won't clash for a single user.
//   });

//   if (error) {
//     alert(error.message);
//     return;
//   }

//   // --- 2. UPDATE THE LOCAL UI STATE FOR INSTANT FEEDBACK ---
//   setActivities(
//     activities.map((act) =>
//       act.id === activity.id ? { ...act, completed: true } : act
//     )
//   );

//   // --- 3. SHOW REWARD AND CLOSE MODAL ---
//   setShowConfetti(true);
//   setTimeout(() => setShowConfetti(false), 5000);
//   handleCloseModal();
// };
  















//   const handleDeleteActivity = (id) => {
//     // This logic will be updated to use the database
//     setActivities(activities.filter((activity) => activity.id !== id));
//     handleCloseModal();
//   };


//   // In App.jsx, with your other handler functions
// const handleActivityAdded = (newActivity) => {
//   // Add the isCustom flag and add it to the top of the list
//   setActivities([{ ...newActivity, isCustom: true, completed: false }, ...activities]);
// };



  
//   const handleSuggestActivity = () => {
//     const availableActivities = filteredActivities.filter(a => !a.completed);
//     if (availableActivities.length === 0) return;
//     const randomActivity = availableActivities[Math.floor(Math.random() * availableActivities.length)];
//     alert(`Here's an idea: ${randomActivity.text}`);
//   };

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//   }

//   // ... inside the App component, before the return statement

// // --- Filtering Logic ---
// const filteredActivities =
//   currentCategory === 'All'
//     ? activities
//     : activities.filter((activity) => {
//         // Check if activity.categories exists before trying to access .name
//         return activity.categories && activity.categories.name === currentCategory;
//       });
//   return (
//     <div className="app-container">
//       {showConfetti && <Confetti />}
      

     
//       {/* --- NEW DYNAMIC HEADER --- */}
//       <header>
//         <div className="header-content">
//           <h1>Dopamine Menu</h1>
//           <p>Choose a quick task to reset your mind and boost your productivity.</p>
//         </div>
//         <div className="header-actions">
//           {session ? (
//             <>
//               <span>Welcome, {session?.user?.email.split('@')[0]}</span>
              
//                <Link to="/dashboard" className="btn-secondary">Dashboard</Link>
//               <button onClick={handleLogout} className="btn-primary">Logout</button>
//             </>
//           ) : (
//             <>
//               <button onClick={() => setShowAuthModal(true)} className="btn-secondary">Login</button>
//               <button onClick={() => setShowAuthModal(true)} className="btn-primary">Sign Up</button>
//             </>
//           )}
//         </div>
//       </header>
//           {/* --- THIS IS THE NEW ROUTING SECTION --- */}
//     <Routes>
//       {/* Route for the main Dopamine Menu */}
//       <Route path="/" element={
//         <main>
//           <div className="suggest-container">
//              <button className="btn-suggest" onClick={handleSuggestActivity}>
//             ✨ Suggest One!
//           </button>

//            {session && (
//       <button className="btn-primary" onClick={() => setShowAddModal(true)}>
//         + Add New Activity
//       </button>
//     )}
//           </div>
//           <CategoryFilter
//             categories={allCategories}
//             currentCategory={currentCategory}
//             onCategoryChange={setCurrentCategory}
//           />
//           <ActivityList activities={filteredActivities} onSelect={handleSelectActivity} />
//         </main>
//       } />

//       {/* Route for the new Dashboard page */}
      
//  <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//     </Routes>





//       <main>
       

//         <CategoryFilter
//   // Pass down the fetched categories
//   categories={allCategories} 
//   currentCategory={currentCategory}
//   onCategoryChange={setCurrentCategory}
// />

//         <ActivityList activities={filteredActivities} onSelect={handleSelectActivity} />
//       </main>
      
//       <ActivityModal 
//         activity={selectedActivity}
//         onClose={handleCloseModal}
//         //onComplete={handleToggleComplete}
//          onComplete={() => handleToggleComplete(selectedActivity)} 
//         onDelete={handleDeleteActivity}
//       />

//       {/* --- NEW AUTH MODAL --- */}
//       {showAuthModal && (
//         <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
//             <div onClick={(e) => e.stopPropagation()}>
//                 <Auth />
//             </div>
//         </div>
//       )}

//       {/* --- NEW ADD ACTIVITY MODAL --- */}
// {showAddModal && (
//     <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
//         <div onClick={(e) => e.stopPropagation()}>
//             <AddActivityForm
//                 categories={allCategories}
//                 session={session}
//                 onActivityAdded={handleActivityAdded}
//                 onClose={() => setShowAddModal(false)}
//             />
//         </div>
//     </div>
// )}
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { supabase } from './supabaseClient';

// Import Components
import ActivityList from './components/ActivityList';
import CategoryFilter from './components/CategoryFilter';
import ActivityModal from './components/ActivityModal';
import AddActivityForm from './components/AddActivityForm';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import Dashboard from './pages/Dashboard';

// Import CSS
import './App.css';

function App() {
  // State for data
  const [activities, setActivities] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');
  
  // State for UI control
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Effect for handling user session
  useEffect(() => {
    setLoading(true);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setShowAuthModal(false);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Effect for fetching categories once
  useEffect(() => {
    async function getCategories() {
      const { data, error } = await supabase.from('categories').select('*');
      if (!error) {
        setAllCategories(data);
      } else {
        console.error('Error fetching categories:', error);
      }
    }
    getCategories();
  }, []);

  // Effect for fetching activities based on session
  useEffect(() => {
    async function loadActivities() {
      const { data: defaultActivities, error: defaultError } = await supabase
        .from('activities')
        .select('*, categories ( name, color )');

      if (defaultError) {
        console.error('Error fetching default activities:', defaultError);
        return;
      }

      if (session) {
        const { data: customActivities, error: customError } = await supabase
          .from('custom_activities')
          .select('*, categories ( name, color )')
          .eq('user_id', session.user.id);

        const allActivities = [
          ...(customActivities || []).map(a => ({ ...a, isCustom: true })),
          ...(defaultActivities || []).map(a => ({ ...a, isCustom: false }))
        ];
        setActivities(allActivities.map(a => ({ ...a, completed: false })));
      } else {
        setActivities((defaultActivities || []).map(a => ({ ...a, completed: false, isCustom: false })));
      }
    }
    loadActivities();
  }, [session]);

  // --- Handler Functions ---
  const handleSelectActivity = (activity) => setSelectedActivity(activity);
  const handleCloseModal = () => setSelectedActivity(null);
  
  const handleActivityAdded = (newActivity) => {
    setActivities([{ ...newActivity, isCustom: true, completed: false }, ...activities]);
  };

  const handleToggleComplete = async (activity) => {
    if (activity.completed || !session) return;
    const { error } = await supabase.from('completions').insert({
      user_id: session.user.id,
      activity_id: activity.id,
    });
    if (error) {
      alert(error.message);
      return;
    }
    setActivities(activities.map((act) => act.id === activity.id ? { ...act, completed: true } : act));
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
    handleCloseModal();
  };
  
  const handleDeleteActivity = async (activityId) => {
    await supabase.from('custom_activities').delete().eq('id', activityId);
    setActivities(activities.filter(a => a.id !== activityId));
    handleCloseModal();
  };
  
  const handleSuggestActivity = () => {
    const availableActivities = filteredActivities.filter(a => !a.completed);
    if (availableActivities.length === 0) return;
    const randomActivity = availableActivities[Math.floor(Math.random() * availableActivities.length)];
    alert(`Here's an idea: ${randomActivity.text}`);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const filteredActivities =
    currentCategory === 'All'
      ? activities
      : activities.filter(a => a.categories && a.categories.name === currentCategory);

  return (
    <div className="app-container">
      {showConfetti && <Confetti />}
      
      <header>
        <div className="header-content">
          <h1>Dopamine Menu 🧠</h1>
          <p>Choose a quick task to reset your mind and boost your productivity.</p>
        </div>
        <div className="header-actions">
          {loading ? (
            <div className="header-placeholder" />
          ) : session ? (
            <>
              <span>Welcome 🥰, {session?.user?.email.split('@')[0]}</span>
              <Link to="/dashboard" className="btn-secondary">Dashboard</Link>
              <button onClick={handleLogout} className="btn-primary">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => setShowAuthModal(true)} className="btn-secondary">Login</button>
              <button onClick={() => setShowAuthModal(true)} className="btn-primary">Sign Up</button>
            </>
          )}
        </div>
      </header>
      
      <Routes>
        {/* Route for the main Dopamine Menu */}
        <Route path="/" element={
          <main>
            <div className="suggest-container">
              <button className="btn-suggest" onClick={handleSuggestActivity}>✨ Suggest One!</button>
              <span> </span>
                            <span> </span>

              {session && (
                <button className="btn-primary" onClick={() => setShowAddModal(true)}>+ Add New Activity</button>
              )}
            </div>
            <CategoryFilter
              categories={allCategories}
              currentCategory={currentCategory}
              onCategoryChange={setCurrentCategory}
            />
            <ActivityList activities={filteredActivities} onSelect={handleSelectActivity} />
          </main>
        } />

        {/* Route for the protected Dashboard page */}
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
        } />
      </Routes>

      {/* --- ALL MODALS LIVE OUTSIDE THE ROUTER --- */}
      <ActivityModal 
        activity={selectedActivity}
        onClose={handleCloseModal}
        onComplete={() => handleToggleComplete(selectedActivity)}
        onDelete={handleDeleteActivity}
      />

      {showAuthModal && (
        <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div onClick={(e) => e.stopPropagation()}><Auth /></div>
        </div>
      )}

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <AddActivityForm
              categories={allCategories}
              session={session}
              onActivityAdded={handleActivityAdded}
              onClose={() => setShowAddModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
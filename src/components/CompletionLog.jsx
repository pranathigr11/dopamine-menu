// import React from 'react';

// // A utility function to format the date nicely
// // function formatDate(isoString) {
// //   return new Date(isoString).toLocaleString(undefined, {
// //     year: 'numeric',
// //     month: 'long',
// //     day: 'numeric',
// //     hour: 'numeric',
// //     minute: '2-digit',
// //   });
// // }
// function formatDate(isoString) {
//   // If the string is null or undefined, return an empty string
//   if (!isoString) return '';

//   // --- THIS IS THE FIX ---
//   // Replace the first space with a 'T' to make it a valid ISO 8601 string
//   const validIsoString = isoString.replace(' ', 'T');
  
//   const date = new Date(validIsoString);
  
//   // Check if the date is valid after parsing
//   if (isNaN(date)) {
//     return 'Invalid Date';
//   }

//   return date.toLocaleString(undefined, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: '2-digit',
//   });
// }

// function CompletionLog({ completions }) {
//   if (!completions || completions.length === 0) {
//     return <p>You haven't completed any activities yet. Go get one done!</p>;
//   }

//   return (
//     <div className="completion-log-container">
//       <h2>Recent Completions</h2>
//       <ul className="completion-list">
//         {completions.map((comp) => (
//           <li key={comp.id} className="completion-item">
//             <img 
//               src={comp.activities.image_url} 
//               alt={comp.activities.text} 
//               className="completion-image"
//             />
//             <div className="completion-details">
//               <h4>{comp.activities.text}</h4>
//               <p>{formatDate(comp.created_at)}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CompletionLog;



import React from 'react';

// A utility function to format the date nicely
function formatDate(isoString) {
  // If the string is null or undefined, return an empty string
  if (!isoString) return '';

  // Replace the first space with a 'T' to make it a valid ISO 8601 string
  const validIsoString = isoString.replace(' ', 'T');
  
  const date = new Date(validIsoString);
  
  // Check if the date is valid after parsing
  if (isNaN(date)) {
    return 'Invalid Date';
  }

  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function CompletionLog({ completions }) {
  if (!completions || completions.length === 0) {
    return <p>You haven't completed any activities yet. Go get one done!</p>;
  }

  return (
    <div className="completion-log-container">
      <h2>Recent Completions</h2>
      <ul className="completion-list">
        {completions.map((comp) => {
          // --- THIS IS THE KEY LOGIC CHANGE ---
          // Determine where the activity details are.
          // The '||' operator is a clean way to pick the one that isn't null.
          const activityDetails = comp.activities || comp.custom_activities;

          // If for some reason neither exists, skip rendering this item.
          if (!activityDetails) {
            return null;
          }

          return (
            <li key={comp.id} className="completion-item">
              <img 
                src={activityDetails.image_url} 
                alt={activityDetails.text} 
                className="completion-image"
              />
              <div className="completion-details">
                <h4>{activityDetails.text}</h4>
                <p>{formatDate(comp.created_at)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompletionLog;
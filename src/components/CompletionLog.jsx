import React from 'react';

// A utility function to format the date nicely
// function formatDate(isoString) {
//   return new Date(isoString).toLocaleString(undefined, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: '2-digit',
//   });
// }
function formatDate(isoString) {
  // If the string is null or undefined, return an empty string
  if (!isoString) return '';

  // --- THIS IS THE FIX ---
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
        {completions.map((comp) => (
          <li key={comp.id} className="completion-item">
            <img 
              src={comp.activities.image_url} 
              alt={comp.activities.text} 
              className="completion-image"
            />
            <div className="completion-details">
              <h4>{comp.activities.text}</h4>
              <p>{formatDate(comp.created_at)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletionLog;
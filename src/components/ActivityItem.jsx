import React from 'react';

// The new, simpler card.
function ActivityItem({ activity, onSelect }) {
    console.log('ActivityItem prop:', activity); 
  return (
    <li 
      className={`activity-card ${activity.completed ? 'completed' : ''}`}
      onClick={() => onSelect(activity)} // When clicked, it calls onSelect
    >
      <img src={activity.image_url} alt={activity.text} />
      <h4>{activity.text}</h4>
    </li>
  );
}

export default ActivityItem;
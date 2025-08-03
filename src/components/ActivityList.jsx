import React from 'react';
import ActivityItem from './ActivityItem';

function ActivityList({ activities, onSelect }) {
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <ActivityItem 
          key={activity.id} 
          activity={activity}
          onSelect={onSelect} // Pass the onSelect function to each item
        />
      ))}
    </ul>
  );
}

export default ActivityList;
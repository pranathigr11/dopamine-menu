import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

function ActivityModal({ activity, onClose, onComplete, onDelete }) {
  if (!activity) return null; // Don't render if no activity is selected

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close-modal" onClick={onClose}>
          <XMarkIcon />
        </button>
        <img src={activity.image_url} alt={activity.text} className="modal-image" />
        <div className="modal-text-content">
          <h2>{activity.text}</h2>
          <p>{activity.why}</p>
          <div className="modal-actions">
            <button className="btn-complete-modal" onClick={() => onComplete(activity.id)}>
            I Did It!
            </button>{activity.isCustom && (
            <button className="btn-delete-modal" onClick={() => onDelete(activity.id)}>
                Delete This Activity
            </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityModal;
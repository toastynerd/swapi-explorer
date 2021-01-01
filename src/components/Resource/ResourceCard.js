import React from 'react';
import './ResourceCard.css';

function ResourceCard({ resource }) {
  return (
    <li className="resource-card">
      {resource.name || resource.title}
    </li>
  )
};

export default ResourceCard;

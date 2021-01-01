import React, { useState } from 'react';
import ResourceFields from './ResourceFields';
import './ResourceCard.css';

function ResourceCard({ resource }) {
  const [expand, setExpand] = useState(false);
  return (
    <li className={`resource-card ${expand ? "expanded" : ""}`} onClick={() => setExpand(!expand)}>
      {resource.name || resource.title}
      {
        expand && <ResourceFields resource={resource}/>
      }
    </li>
  )
};

export default ResourceCard;

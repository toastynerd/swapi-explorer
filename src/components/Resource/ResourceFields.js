import React from 'react';
import './ResourceFields.css';

function ResourceFields({ resource }) {
  return (
    <ul className="resource-fields">
      
      { Object.keys(resource).map((key) => Array.isArray(resource[key]) ? '' : key === 'url' ? '' : <li>{key}: {resource[key]}</li>) }
    </ul>

  );
};

export default ResourceFields;

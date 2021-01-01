import React from 'react';
import './ResourceFields.css';

function ResourceFields({ resource }) {
  const filteredFields = ['title', 'name', 'created', 'edited', 'url'];
  return (
    <ul className="resource-fields">
      { Object.keys(resource).map((key) => filteredFields.indexOf(key) !== -1 ? '':  Array.isArray(resource[key]) ? '' : <li>{key}: {resource[key]}</li> ) }
    </ul>

  );
};

export default ResourceFields;

import React, {useEffect, useState} from 'react';
import './Resource.css';

function Resource(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/${props.category}/`) 
      .then(res => res.json())
      .then((result) => {
        setIsLoading(false);
        setResource(result.results);
      })
      .catch(error => setError(error));
  }, [props.category]);
  if (error) {
    return <div className="error">{error.message}</div>
  } else if (isLoading) {
    return <div>...Loading</div>
  } else {
    return (
      <ul className="resource">
      {
        resource.map((item, index) => <li key={index}>{item.name ? item.name : item.title}</li>)
      }
      </ul>
    )
  }
};

export default Resource;

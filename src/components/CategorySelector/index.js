import React, {useEffect, useState} from 'react';
import './CategorySelector.css';

function CategorySelector() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/")
      .then(res => res.json())
      .then((result) => {
        setIsLoading(false);
        setCategories(result);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) {
    return <div className="error">{error.message}</div>
  } else if (isLoading) {
    return <div>...loading</div>
  } else {
    return (
      <ul className="categories">
        {Object.keys(categories).map(category => <li key={category}>{category}</li>)}
      </ul>
    )
  }

};

export default CategorySelector;

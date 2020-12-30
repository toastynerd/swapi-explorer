import React, {useEffect, useState} from 'react';
import './CategorySelector.css';

function CategorySelector(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState({});

  useEffect(() => {
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
      <nav className="categories">
        {
          Object.keys(categories).map(category => (
            <a 
              onClick={() => props.setCategory(category)} 
              key={category}
              className={category === props.category ? 'selected' : ''}
            >
              {category}
            </a>
          ))
        }
      </nav>
    )
  }

};

export default CategorySelector;

import React, {useEffect, useState} from 'react';
import ResourceCard from './ResourceCard';
import './Resource.css';

function Resource(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [more, setMore] = useState(false);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setResource([]);
    setCurrentPage(1);
    fetch(`https://swapi.dev/api/${props.category}/`) 
      .then(res => res.json())
      .then((result) => {
        setIsLoading(false);
        console.log(result);
        setResource(result.results);
        setMore(!!result.next);
      })
      .catch(error => setError(error));
  }, [props.category]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/${props.category}/?page=${currentPage}`) 
      .then(res => res.json())
      .then((result) => {
        setIsLoading(false);
        setResource([...resource, ...result.results]);
        setMore(!!result.next);
      })
      .catch(error => setError(error));
  }, [currentPage]);

  if (error) {
    return (
      <div onClick={() => setError(null)} className="resource-container">
        <p className="error">{error.message} click to dismiss</p>
      </div>
    )
  } else if (isLoading && !resource.length) {
    return <div>...Loading</div>
  } else {
    return (
      <div className="resource-container">
        <ul className="resource">
        {
          resource.map((item, index) => <ResourceCard resource={item} key={index}/>)
        }
        </ul>
        {more == true && <button className="more-button" onClick={() => setCurrentPage(currentPage + 1)}>Load More</button>}
      </div>
    )
  }
};

export default Resource;

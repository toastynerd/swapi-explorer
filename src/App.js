import React, {useState} from 'react';
import './App.css';

import { 
  CategorySelector,
  Resource,
} from './components';

function App() {
  const [category, setCategory] = useState('films');
  return (
    <main>
      <h1>Star Wars API Explorer</h1>
      <p>Current Category is: {category}</p>
      <CategorySelector category={category} setCategory={setCategory} />
      <Resource category={category}/>
     
    </main>
  );
}

export default App;

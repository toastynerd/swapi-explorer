import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { CategorySelector } from './components';

function App() {
  const [category, setCategory] = useState(null);
  return (
    <main>
      <h1>Star Wars API Explorer</h1>
      <CategorySelector category={category} setCategory={setCategory} />
    </main>
  );
}

export default App;

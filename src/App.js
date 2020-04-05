import React, {useEffect, useState} from 'react';
import './App.css';

const app_strings = require('./Utils');

const App = () => {
  
  const APP_ID = app_strings.APP_ID;
  const APP_KEY = app_strings.APP_KEY;

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect( () => {
    console.log('Effect has been run');
  },[]);

  const getRecipes = async () => {
    const response = await fetch()
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
 
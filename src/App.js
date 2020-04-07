import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const app_strings = require('./Utils');

const App = () => {
  
  const APP_ID = app_strings.APP_ID;
  const APP_KEY = app_strings.APP_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharactersList from './components/CharactersList';

const App = () => {

  const [charactersData, setCharatersData] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
      .then(response => {
        console.log(response.data);
        setCharatersData(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharactersList charactersData={charactersData}/>
    </div>
  );
}

export default App;

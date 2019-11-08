import React from 'react';

function CharacterCard (props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Hair Color: {props.hair_color}</p>
      <p>Number of films: {props.films.length}</p>
    </div>
  )
}

export default CharacterCard;
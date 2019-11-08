import React from 'react';

function CharacterCard ({data}) {
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {data.hair_color}</p>
      {/* <p>Number of films: {data.films.length}</p> */}
    </div>
  )
}

export default CharacterCard;
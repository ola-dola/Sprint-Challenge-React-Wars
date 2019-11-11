import React from 'react';
import CharacterCard from './CharaterCard';

function CharactersList({ charactersData }) {
  return (
    <div className="cards-container">
      {
        charactersData.map((character, index) => {
          return <CharacterCard data={character} key={index} />
        })
      }
    </div>
  )
}

export default CharactersList;
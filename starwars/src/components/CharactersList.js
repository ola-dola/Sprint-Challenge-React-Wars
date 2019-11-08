import React from 'react';
import CharacterCard from './CharaterCard';

function CharactersList({ charactersData}) {
  return (
    charactersData.map((character, index) => {
      return <CharacterCard data={character} key={index}/>
    })
  )
}

export default CharactersList;
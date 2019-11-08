import React from 'react';
import CharacterCard from './CharaterCard';

function CharactersList({data}) {
  return (
    data.map(() => {
      <CharacterCard data={data}/>
    })
  )
}

export default CharactersList;
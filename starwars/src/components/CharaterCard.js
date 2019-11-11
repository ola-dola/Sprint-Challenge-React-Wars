import React from 'react';
import { Card, CardTitle, CardText, CardHeader } from 'reactstrap';

function CharacterCard({ data }) {
  return (
    <div>
      <Card className="cardOla">
        <CardHeader tag="h2" >{data.name}</CardHeader>
        <CardTitle>Name: {data.name}</CardTitle>
        <CardText>Height: {data.height}</CardText>
        <CardText>Mass: {data.mass}</CardText>
        <CardText>Hair Color: {data.hair_color}</CardText>
        <CardText>Birth Year: {data.birth_year}</CardText>
        <CardText>Number of films: {data.films.length}</CardText>
      </Card>
    </div>
  )
}

export default CharacterCard;
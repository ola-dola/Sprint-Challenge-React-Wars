import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

function CharacterCard({ data }) {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Name: {data.name}</CardTitle>
          <CardText>Height: {data.height}</CardText>
          <CardText>Mass: {data.mass}</CardText>
          <CardText>Hair Color: {data.hair_color}</CardText>
          <CardText>Birth Year: {data.birth_year}</CardText>
          <CardText>Number of films: {data.films.length}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default CharacterCard;
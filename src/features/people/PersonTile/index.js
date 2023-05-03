import React from "react";
import { StyledPersonTile, PersonImage, PersonName, DefaultImageContainer, DefaultImage, Character } from "./styled";
import profile from "../../../images/Profile.svg";
import { Link } from "react-router-dom";
import { toGrocerie } from "../../../routes";
const grandesSurfaces = ["https://www.1min30.com/wp-content/uploads/2017/07/Le-logo-Carrefour.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsgOBIRFhulnQ22N0ho-H3U-3teTGTvGN1QCgKXs&s", "https://www.communication-paris.com/wp-content/uploads/2019/04/logo-e-leclerc-V2.png"];


const PersonTile = ({ person }) => (
  <StyledPersonTile as={Link} to={toGrocerie({ id: person.id })}>
    {
      person.profile_path ?
        <PersonImage src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} /> :
        <DefaultImageContainer>
          <DefaultImage src={grandesSurfaces[Math.floor(Math.random() * 3)]} />
        </DefaultImageContainer>
    }
    <PersonName> {person.name}</PersonName>
    {
      person.character &&
      <Character>{person.character}</Character>
    }
    {
      person.job &&
      <Character>{person.job}</Character>
    }
  </StyledPersonTile >
);

export default PersonTile;
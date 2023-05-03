import React from "react";
import star from "./ratingStar.svg";
import Tile from "../../../common/Tile";
import Poster from "../../../images/Poster.svg";
import {
  FoodTileImg,
  FoodTileHeader,
  FoodTileYear,
  FoodTileTags,
  FoodAdditionalInfo,
  FoodRatingImg,
  FoodRatingText,
  FoodRatingVotes,
  FoodInfoWrapper,
} from "./styled";
import { Link } from "react-router-dom";
import { toFood } from "../../../routes";
import { votes } from "../../../common/languages";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { useSelector } from "react-redux";
import { useGenres } from "./useGenres";

const MovieTile = ({ food }) => {
  const language = useSelector(selectLanguage);
  const generatedTags = useGenres(food.genre_ids);

  return (
    <Tile as={Link} to={toFood({ id: food.id })}>
      <FoodTileImg
        url={
          'https://www.lesvergersdegally.com/wp-content/uploads/2014/07/fruit4.png'
        }
      />
      <FoodInfoWrapper>
        <FoodTileHeader>{food.name}</FoodTileHeader>
        <FoodTileYear>
          {/*
          {food.character
            ? `${food.character} (${
                food.release_date ? food.release_date.slice(0, 4) : "????"
              })`
            : food.job
            ? `${food.job} (${
                food.release_date ? food.release_date.slice(0, 4) : "????"
              })`
            : food.release_date
            ? food.release_date.slice(0, 4)
            : "????"}
            */}
        </FoodTileYear>
        <FoodTileTags>{generatedTags}</FoodTileTags>
        <FoodAdditionalInfo>
          <FoodRatingImg src={star}></FoodRatingImg>
          <FoodRatingText>{(Math.random() * 10+2).toFixed(0)}</FoodRatingText>
          <FoodRatingVotes>
            {(Math.random() * 10+2).toFixed(0)} {votes[language]}
          </FoodRatingVotes>
        </FoodAdditionalInfo>
      </FoodInfoWrapper>
    </Tile>
  );
};

export default MovieTile;

import React from "react";
import { StyledMoviesContainer } from "./styled";
import FoodTile from "../FoodTile";

export const MoviesContainer = ({ foods }) => (
  
  <StyledMoviesContainer>
    {foods.map(food =>
    
      <FoodTile
        key={food.id}
        food={food}
      />
    )
    }
    {console.log(foods)}

  </StyledMoviesContainer>
  
);

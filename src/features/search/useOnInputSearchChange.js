import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { toFoods, toPeople } from "../../routes";

const SEARCH_DELAY = 500;

export const useOnInputSearchChange = setInputValue => {
  const timeoutRef = useRef();
  const history = useHistory();

  return ({ newValue, atMovies }) => {
    clearTimeout(timeoutRef.current);
    setInputValue(newValue);

    timeoutRef.current = setTimeout(() => {
      history.push({
        pathname: atMovies ? toFoods() : toPeople(),
        search: newValue ? `search=${newValue}` : "",
      });
    }, SEARCH_DELAY);
  };
};
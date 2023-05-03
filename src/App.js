import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toFood, toFoods, toPeople, toGrocerie } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviePage from "./features/foods/MoviePage";
import MoviesPage from "./features/foods/MoviesPage";
import PersonPage from "./features/people/PersonPage";
import PeoplePage from "./features/people/PeoplePage";
import Navigation from "./common/Navigation/";
import ScrollArrow from "./common/ScrollArrow/";
import { useSelector } from "react-redux";
import { selectIsDark } from "./themeSlice";

const App = () => {
  const isDark = useSelector(selectIsDark);

  return (
    <HashRouter>
      <ThemeProvider theme={isDark ? darkTheme : theme}>
        <GlobalStyle />
        <Navigation />
        <ScrollArrow />
        <Switch>
          <Route path={toFood()}>
            <MoviePage />
          </Route>
          <Route path={toFoods()}>
            <MoviesPage />
          </Route>
          <Route path={toGrocerie()}>
            <PersonPage />
          </Route>
          <Route path={toPeople()}>
            <PeoplePage />
          </Route>
          <Route>
            <Redirect to={toFoods()} />
          </Route>
        </Switch>
      </ThemeProvider>
    </HashRouter>
  );
};
export default App;

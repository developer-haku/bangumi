import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import WeeklyAnimeList from "../components/AnimeList/WeeklyAnimeList/WeeklyAnimeList";
import SeasonAnimeList from "../components/AnimeList/SeasonAnimeList/SeasonAnimeList";
import AnnualAnimeList from "../components/AnimeList/AnnualAnimeList/AnnualAnimeList";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";

const Router = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home openSidebar={props.openSidebar} />}
        />

        <Route
          path="/weekly"
          exact
          render={() => <WeeklyAnimeList openSidebar={props.openSidebar} />}
        />
        <Route exact path="/error" render={() => <ErrorPage />} />
        <Route
          path="/:year/:month"
          render={() => <SeasonAnimeList openSidebar={props.openSidebar} />}
        />
        <Route
          path="/:year"
          render={() => <AnnualAnimeList openSidebar={props.openSidebar} />}
        />
        <Route path="*" render={() => <ErrorPage />} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;

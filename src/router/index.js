import React from "react";
import { Switch, Route } from "react-router-dom";

import WeeklyAnimeList from "../components/AnimeList/WeeklyAnimeList/WeeklyAnimeList";
import SeasonAnimeList from "../components/AnimeList/SeasonAnimeList/SeasonAnimeList";
import AnnualAnimeList from "../components/AnimeList/AnnualAnimeList/AnnualAnimeList";
import Home from "../pages/Home/Home";
import FavoritedAnimeList from "../components/AnimeList/FavoritedAnimeList/FavoritedAnimeList";
import ErrorPage from "../pages/Error/Error";
import FullAnimeInfo from "../components/FullAnimeInfo/FullAnimeInfo";

const Router = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/weekly" exact component={WeeklyAnimeList} />
        <Route path="/favorite" exact component={FavoritedAnimeList} />
        <Route path="/error" exact component={ErrorPage} />
        <Route path="/bangumi/:bgmId"component={FullAnimeInfo}/>
        <Route path="/:year/:month" component={SeasonAnimeList} />
        <Route path="/:year" component={AnnualAnimeList} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;

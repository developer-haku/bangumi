import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import animeList from "../components/AnimeList/SeasonAnimeList/SeasonAnimeList";

export class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:year/:season">
          <animeList />
        </Route>
        {/* <Route path="/:year/:season" component={animeList} /> */}
      </Switch>
    );
  }
}

export default Router;

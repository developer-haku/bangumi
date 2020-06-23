import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import * as action from "../../store/actions";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import WeeklyAnimeList from "../AnimeList/WeeklyAnimeList/WeeklyAnimeList";
import SeasonAnimeList from "../AnimeList/SeasonAnimeList/SeasonAnimeList";
import YearAnimeList from "../AnimeList/AnnualAnimeList/AnnualAnimeList";
// import styles from "./Layout.module.css";

class Layout extends PureComponent {
  state = {
    openSidebar: true,
  };

  componentDidMount() {
    this.props.initBangumiData();
    console.log("TESTOYO")
  }

  siderbarHandler = () => {
    this.setState((prevState) => {
      return { openSidebar: !prevState.openSidebar };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar toggleSidebar={this.siderbarHandler} />
        <Sidebar openSidebar={this.state.openSidebar} />
        <Switch>
          <Route
            path="/weekly"
            exact
            render={() => (
              <WeeklyAnimeList
                items={this.props.selectedItems}
                openSidebar={this.state.openSidebar}
              />
            )}
          />
          <Route path="/:year/:month" render={() => <SeasonAnimeList openSidebar={this.state.openSidebar} />} />
          <Route path="/:year" render={() => <YearAnimeList />} />
        </Switch>
        {/* <YearAnimeList /> */}
        {/* <Routes /> */}
        {/* <AnimeList items={this.props.selectedItems} openSidebar={this.state.openSidebar} /> */}
        {/* <WeeklyAnimeList items={this.props.selectedItems} openSidebar={this.state.openSidebar} /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    years: state.bangumiData.years,
    selectedItems: state.bangumiData.currentSelectedAnimeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initBangumiData: () => dispatch(action.initBangumiData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

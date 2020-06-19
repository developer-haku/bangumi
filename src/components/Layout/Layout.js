import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import * as action from "../../store/actions";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import AnimeList from "../AnimeList/SeasonAnimeList"
import Routes from "../../router";
import WeeklyAnimeList from "../WeeklyAnimeList/WeeklyAnimeList"
// import styles from "./Layout.module.css";

class Layout extends Component {
  state = {
    openSidebar: true,
  };

  componentDidMount() {
    this.props.initBangumiData();
    console.log(this.props)
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
        <Routes />
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

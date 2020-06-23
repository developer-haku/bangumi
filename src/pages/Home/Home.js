import React, { Component } from "react";
import { connect } from "react-redux";

import * as action from "../../store/actions";
import AnimeList from "../../components/AnimeList/AnimeList";

export class Home extends Component {
  componentDidMount() {
    this.props.initBangumiData();
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.bangumiData.fullAnimeList,
    selectedItems: state.bangumiData.currentSelectedAnimeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initBangumiData: () => dispatch(action.initBangumiData()),
    selectSeason: () => dispatch(action.getSeasonList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

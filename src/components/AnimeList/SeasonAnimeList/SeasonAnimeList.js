import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./SeasonAnimeList.module.css";
import AnimeCard from "../../AnimeCard/AnimeCard";
import * as action from "../../../store/actions";
import { getSeasonRange } from "../../../utils/utils";

const SeasonAnimeList = React.memo((props) => {
  let { year, month } = useParams();
  
  // Get season begin time and end time
  const range = getSeasonRange(year, month);
  // Get all animes
  const fullItems = JSON.parse(localStorage.getItem("bd_items"));

  // Filter Selected Season
  const selectedItems = fullItems.filter(
    (item) =>
      new Date(item.begin) >= new Date(range[0]) &&
      new Date(item.begin) < new Date(range[1])
  );

  const list = selectedItems.map((item) => {
    const key = item.sites.find((i) => i.site === "bangumi").id;
    return <AnimeCard key={key} anime={item} bangumiId={key} />;
  });

  return (
    <div
      className={
        props.openSidebar ? styles.animeList : styles.animeListFullScreen
      }
    >
      {list}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    selectedItems: state.bangumiData.currentSelectedAnimeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSeason: (year, month) => dispatch(action.getSeasonList(year, month)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeasonAnimeList);

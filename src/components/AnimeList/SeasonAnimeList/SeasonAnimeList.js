import React from "react";
import { useParams, useHistory } from "react-router-dom";

// import styles from "./SeasonAnimeList.module.css";
import AnimeList from "../AnimeList";
import { getSeasonRange } from "../../../utils/utils";

const SeasonAnimeList = React.memo((props) => {
  let { year, month } = useParams();
  let history = useHistory();

  if (!parseInt(year) || !parseInt(month)) {
    history.replace("/error");
  }

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

  return <AnimeList list={selectedItems} />;
});

export default SeasonAnimeList;

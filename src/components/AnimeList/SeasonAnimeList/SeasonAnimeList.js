import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

// import styles from "./SeasonAnimeList.module.css";
import AnimeList from "../AnimeList";
import AnimeListSkeleton from "../AnimeListSkeleton";
import { getSeasonRange } from "../../../utils/utils";

const SeasonAnimeList = () => {
  const [loading, setLoading] = useState(true);
  const [seasonItems, setSeasonItems] = useState([]);
  let { year, month } = useParams();
  let history = useHistory();

  if (!parseInt(year) || !parseInt(month)) {
    history.replace("/error");
  }

  useEffect(() => {
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
    setSeasonItems(selectedItems);
    setLoading(false);
  }, [month, setSeasonItems, year]);

  return loading ? <AnimeListSkeleton /> : <AnimeList list={seasonItems} />;
};

export default SeasonAnimeList;

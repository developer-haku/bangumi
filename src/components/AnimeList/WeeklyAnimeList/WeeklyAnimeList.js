import React from "react";

import styles from "./WeeklyAnimeList.module.css";
import AnimeColumnList from "../../AnimeColumnList/AnimeColumnList";
import { getSeasonRange } from "../../../utils/utils";

const WeeklyAnimeList = (props) => {
  const fullItems = JSON.parse(localStorage.getItem("bd_items"));

  const range = getSeasonRange(
    new Date().getFullYear(),
    new Date().getMonth() + 1
  );

  const selectedItems = fullItems.filter(
    (item) =>
      new Date(item.begin) >= new Date(range[0]) &&
      new Date(item.begin) < new Date(range[1])
  );

  let list = [];

  for (let day = 0; day < 7; day++) {
    list.push(
      selectedItems.filter((i) => {
        return new Date(i.begin).getDay() === day;
      })
    );
  }

  return (
    <div className={styles.weeklyAnimeList}>
      {list.map((l) => {
        return (
          <AnimeColumnList
            key={list.indexOf(l)}
            list={l}
            weekday={list.indexOf(l)}
          />
        );
      })}
    </div>
  );
};

export default WeeklyAnimeList;

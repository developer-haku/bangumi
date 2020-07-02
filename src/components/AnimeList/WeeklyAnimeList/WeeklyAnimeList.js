import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";

import styles from "./WeeklyAnimeList.module.css";
import AnimeCard from "../../AnimeCard/AnimeCard";
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
      selectedItems
        .filter((i) => {
          return new Date(i.begin).getDay() === day;
        })
        .map((item) => {
          const key = item.sites.find((i) => i.site === "bangumi").id;
          return <AnimeCard key={key} anime={item} bangumiId={key} />;
        })
    );
  }

  const weekdayCN = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  return (
    <div>
      {list.map((l) => {
        return (
          <div key={list.indexOf(l)}>
            <Typography
              className={
                props.openSidebar
                  ? styles.animeList
                  : styles.animeListFullScreen
              }
              variant="h5"
              gutterBottom
            >
              <CalendarToday className={styles.calendarIcon} />
              {weekdayCN[list.indexOf(l)]}
            </Typography>
            <Divider />
            <div>{l}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyAnimeList;

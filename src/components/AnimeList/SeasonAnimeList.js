import React from "react";

import styles from "./SeasonAnimeList.module.css";
import AnimeCard from "../AnimeCard/AnimeCard";

const animeList = (props) => {
  const list = props.items.map((item) => {
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
};

export default animeList;

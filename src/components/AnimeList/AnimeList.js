import React from "react";

import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeList = (props) => {
  return (
    <React.Fragment>
      {props.list.map((item) => {
        const key = item.sites.find((i) => i.site === "bangumi").id;
        return <AnimeCard key={key} anime={item} bangumiId={key} />;
      })}
    </React.Fragment>
  );
};

export default AnimeList;

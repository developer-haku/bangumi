import React from "react";

import AnimeList from "../AnimeList";
import { Typography, Divider } from "@material-ui/core";

const FavoritedAnimeList = () => {
  const favorite = JSON.parse(localStorage.getItem("favorite"));
  const items = JSON.parse(localStorage.getItem("bd_items")).filter((item) => {
    return favorite.includes(item.sites.find((i) => i.site === "bangumi").id);
  });
  return (
    <React.Fragment>
      <Typography variant="body1" align="center">移除收藏后需要刷新一下哦~</Typography>
      <Divider />
      <AnimeList list={items} />
    </React.Fragment>
  );
};

export default FavoritedAnimeList;

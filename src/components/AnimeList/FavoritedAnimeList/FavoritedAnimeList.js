import React, { useState, useEffect } from "react";

import AnimeList from "../AnimeList";
import AnimeListSkeleton from "../AnimeListSkeleton";
import { Typography, Divider } from "@material-ui/core";

const FavoritedAnimeList = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem("favorite"));
    const filteredItems = JSON.parse(localStorage.getItem("bd_items")).filter(
      (item) => {
        return favorite.includes(
          item.sites.find((i) => i.site === "bangumi").id
        );
      }
    );
    setItems(filteredItems);
    setLoading(false);
  }, []);
  return loading ? (
    <AnimeListSkeleton />
  ) : (
    <React.Fragment>
      <Typography variant="body1" align="center">
        移除收藏后需要刷新一下哦~
      </Typography>
      <Divider />
      <AnimeList list={items} />
    </React.Fragment>
  );
};

export default FavoritedAnimeList;

import React from "react";

import AnimeCardSkeleton from "../AnimeCard/AnimeCardSkeleton";

const AnimeListSkeleton = () => {
  let list = [];

  for (let i = 0; i < 60; i++) {
    list.push(i);
  }

  return (
    <React.Fragment>
      {list.map((l) => (
        <AnimeCardSkeleton key={l} />
      ))}
    </React.Fragment>
  );
};

export default AnimeListSkeleton;

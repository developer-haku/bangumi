import React, { useState, useEffect } from "react";
import { Pagination } from "@material-ui/lab";

import { getAnnualRange } from "../../../../utils/utils";
import AnimeList from "../../AnimeList";
import AnimeListSkeleton from "../../AnimeListSkeleton";
import styles from "./PaginationAnimeList.module.css";

const PaginationAnimeList = (props) => {
  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAnimes, setCurrentAnimes] = useState([]);
  const [animePerPage] = useState(getAnimePerPageByResolution());

  useEffect(() => {
    console.log("again");
    // Get season begin time and end time
    const range = getAnnualRange(props.year);
    // Get all animes
    const fullItems = JSON.parse(localStorage.getItem("bd_items"));
    // Filter Selected Season
    const selectedItems = fullItems.filter(
      (item) =>
        new Date(item.begin) >= new Date(range[0]) &&
        new Date(item.begin) < new Date(range[1])
    );
    setAnimes(selectedItems);
  }, [props.year]);

  useEffect(() => {
    const indexOfLastAnime = currentPage * animePerPage;
    const indexOfFirstAnime = indexOfLastAnime - animePerPage;
    const slice = animes.slice(indexOfFirstAnime, indexOfLastAnime);
    setCurrentAnimes(slice);
    setLoading(false);
  }, [animePerPage, animes, currentPage]);

  const pageChangeHandler = (event, value) => setCurrentPage(value);

  return (
    <div>
      {loading ? <AnimeListSkeleton /> : <AnimeList list={currentAnimes} />}
      <Pagination
        className={styles.pagination}
        count={Math.ceil(animes.length / animePerPage)}
        page={currentPage}
        onChange={pageChangeHandler}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

const getAnimePerPageByResolution = () => {
  return parseInt((window.screen.width - 250) / 160) * 3;
};

export default PaginationAnimeList;

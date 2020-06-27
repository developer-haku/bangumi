import React, { useState, useEffect } from "react";
import { Pagination } from "@material-ui/lab";

import { getAnnualRange } from "../../../../utils/utils";
import AnimeList from "../../AnimeList";
import styles from "./PaginationAnimeList.module.css";

const PaginationAnimeList = (props) => {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animePerPage, setAnimePerPage] = useState(40);

  useEffect(() => {
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

  const indexOfLastAnime = currentPage * animePerPage;
  const indexOfFirstAnime = indexOfLastAnime - animePerPage;
  const currentAnimes = animes.slice(indexOfFirstAnime, indexOfLastAnime);

  const pageChangeHandler = (event, value) => setCurrentPage(value);

  return (
    <div>
      <AnimeList list={currentAnimes} />
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

export default PaginationAnimeList;

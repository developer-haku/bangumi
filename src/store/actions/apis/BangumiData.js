import axios from "axios";

import * as actionType from "../ActionTypes";
import { getSeasonRange, filterItemWithNoBangumiId } from "../../../utils/utils";

export const setBangumiData = (siteMeta, items) => {
  return {
    type: actionType.FETCH_BANGUMI_DATA,
    siteMeta: siteMeta,
    items: items,
  };
};

export const setSelectedList = (list) => {
  return {
    type: actionType.SELECT_ANIME_BY_SEASON,
    list: list,
  };
};

export const setYearList = (years) => {
  return {
    type: actionType.INITIALIZE_YEAR_LIST,
    years: years,
  };
};

export const getSeasonList = (
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) => {
  return (dispatch) => {
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
    dispatch(setSelectedList(selectedItems));
  };
};

export const selectBangumiData = (version) => {
  return (dispatch) => {
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/bangumi-data@${version}/dist/data.json`
      )
      .then((res) => {
        dispatch(setBangumiData(res.data.siteMeta, filterItemWithNoBangumiId(res.data.items)));
      });
  };
};

export const initBangumiData = () => {
  return (dispatch) => {
    const localVersion = localStorage.getItem("bd_version");
    let lastestVersion = null;
    let items = [];

    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", "[]");
    }

    axios
      .get("https://data.jsdelivr.com/v1/package/npm/bangumi-data")
      .then((res) => {
        lastestVersion = res.data.tags.latest;
        if (localVersion !== lastestVersion) {
          axios
            .get(
              `https://cdn.jsdelivr.net/npm/bangumi-data@latest/dist/data.json`
            )
            .then((res) => {
              localStorage.setItem("bd_version", lastestVersion);
              localStorage.setItem(
                "bd_site_meta",
                JSON.stringify(res.data.siteMeta)
              );
              localStorage.setItem("bd_items", JSON.stringify(filterItemWithNoBangumiId(res.data.items)));
              dispatch(setBangumiData(res.data.siteMeta, filterItemWithNoBangumiId(res.data.items)));
              items = filterItemWithNoBangumiId(res.data.items);
            });
        } else {
          dispatch(
            setBangumiData(
              JSON.parse(localStorage.getItem("bd_site_meta")),
              JSON.parse(localStorage.getItem("bd_items"))
            )
          );
          items = JSON.parse(localStorage.getItem("bd_items"));
        }
        const range = getSeasonRange(
          new Date().getFullYear(),
          new Date().getMonth() + 1
        );
        const selectedItems = items.filter(
          (item) =>
            new Date(item.begin) >= new Date(range[0]) &&
            new Date(item.begin) < new Date(range[1])
        );
        dispatch(setSelectedList(selectedItems));

        let years = [];
        items.forEach((b) => {
          const year = new Date(b.begin).getFullYear();
          if (!years.includes(year)) years.push(year);
        });
        dispatch(setYearList(years));
      });
  };
};

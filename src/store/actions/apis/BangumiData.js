import axios from "axios";

import * as actionType from "../ActionTypes";
import * as init from "../../../service/Initialization";

export const setInitialization = (initialized) => {
  return {
    type: actionType.INITIALIZATION,
    initialized: initialized,
  };
};

export const initialization = () => {
  return (dispatch) => {
    const localVersion = localStorage.getItem("bd_version");
    let lastestVersion = null;

    init.initializeLocalSetting();
    init.initializeLocalFavorite();

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
              init.initializeLocalBangumiData(lastestVersion, res.data);
              init.initializeLocalYearList(res.data.items);
              dispatch(setInitialization(true));
            });
        } else {
          dispatch(setInitialization(true));
        }
      });
  };
};

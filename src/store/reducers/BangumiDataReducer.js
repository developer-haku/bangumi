import * as actionType from "../actions/ActionTypes";

const defaultState = {
  siteMeta: {},
  fullAnimeList: [],
  currentSelectedAnimeList: [],
  years: [],
  latest: true,
  updateToLatest: true,
};

const fetchBangumiData = (state, action) => {
  return {
    ...state,
    siteMeta: action.siteMeta,
    fullAnimeList: action.items,
  };
};

const selectAnimeBySeason = (state, action) => {
  return {
    ...state,
    currentSelectedAnimeList: action.list,
  };
};

const initializeYearList = (state, action) => {
  return {
    ...state,
    years: action.years
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.FETCH_BANGUMI_DATA:
      return fetchBangumiData(state, action);
    case actionType.SELECT_ANIME_BY_SEASON:
      return selectAnimeBySeason(state, action);
    case actionType.INITIALIZE_YEAR_LIST:
      return initializeYearList(state, action);
    default:
      return state;
  }
};

export default reducer;

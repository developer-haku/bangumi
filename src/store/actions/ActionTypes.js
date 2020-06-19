/** USER ACTIONS */
// Actions relate to user data management
export const CLEAR_ALL_LOCAL_STORAGE = "CLEAR_ALL_LOCAL_STORAGE"

// Actions realte to favoring animes
export const FAVOR_AN_ANIME = "FAVOR_AN_ANIME";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";

// Actions relate to bangumi-data management by the user
export const SELECT_BANGUMI_DATA_VERSION = "SELECT_BANGUMI_DATA_VERSION"; // Lastest version may be incompatible and causing issues.
export const CLEAR_LOCAL_BANGUMI_DATA = "CLEAR_LOCAL_BANGUMI_DATA";
export const RE_FETCH_BANGUMI_DATA = "RE_FETCH_BANGUMI_DATA";

// Actions realte to anime list selection
export const SELECT_ANIME_BY_SEASON = "SELECT_ANIME_BY_SEASON";
export const SELECT_ANIME_BY_YEAR = "SELECT_ANIME_BY_YEAR";

// State Initialization
export const INITIALIZE_YEAR_LIST = "INITIALIZE_YEAR_LIST";

/** API DATA FETCH */
// Actions relate to bangumi-data fetch
export const FETCH_BANGUMI_DATA = "FETCH_BANGUMI_DATA";
export const FETCH_BANGUMI_DATA_SUCCESS = "FETCH_BANGUMI_DATA_SUCCESS";
export const FETCH_BANGUMI_DATA_FAIL = "FETCH_BANGUMI_DATA_FAIL";

// Actions relate to api.bgm.tv fetch
export const FETCH_BGM_TV_API_DATA_START = "FETCH_BGM_TV_API_DATA_START";
export const FETCH_BGM_TV_API_DATA_SUCCESS = "FETCH_BGM_TV_API_DATA_START";
export const FETCH_BGM_TV_API_DATA_FAIL = "FETCH_BGM_TV_API_DATA_START";

// Actions relate to MyAnimeList JIKAN api fetch
export const SEARCH_ANIME_TITLE_ON_JIKAN_API = "SEARCH_ANIME_TITLE_ON_JIKAN_API";
export const FETCH_JIKAN_API_DATA_START = "FETCH_JIKAN_API_DATA_START";
export const FETCH_JIKAN_API_DATA_SUCCESS = "FETCH_JIKAN_API_DATA_SUCCESS";
export const FETCH_JIKAN_API_DATA_FAIL = "FETCH_JIKAN_API_DATA_FAIL";

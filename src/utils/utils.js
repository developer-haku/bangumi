/** This files store utility functions for the project. */

/**
 * Pass the year and month and give back the start and end time of the season
 * @param {number} year The year of the selected season
 * @param {number} month Any month during the selected season
 * @returns The begin and end time string array of the selected season
 */
export const getSeasonRange = (year, month) => {
  let startMonth = 0,
    endMonth = 0,
    endYear = year;

  if (month >= 1 && month < 4) {
    startMonth = 1;
    endMonth = 4;
  } else if (month >= 4 && month < 7) {
    startMonth = 4;
    endMonth = 7;
  } else if (month >= 7 && month < 10) {
    startMonth = 7;
    endMonth = 10;
  } else if (month >= 10) {
    startMonth = 10;
    endMonth = 1;
    endYear++;
  }

  return [
    year + "-" + ("0" + startMonth).slice(-2) + "-01T00:00:00.000Z",
    endYear + "-" + ("0" + endMonth).slice(-2) + "-01T00:00:00.000Z",
  ];
};

/**
 * Pass the year and give back the start and end time of the year
 * @param {number} year The year of the selected year
 * @returns The begin and end time string array of the selected year
 */
export const getAnnualRange = (year) => {
  return [year + "-01-01T00:00:00.000Z", ++year + "-01-01T00:00:00.000Z"];
};

/**
 * Translate breadcrumb to property text
 * @param {string} breadcrumb breadcrumb string that was originally extract from the url
 * @returns translated breadcrumb
 */
export const translateBreadcrumb = (breadcrumb) => {
  const translateData = {
    weekly: "每周新番",
    favorite: "我的收藏",
    about: "关于",
    instruction: "使用说明"
  };

  return translateData[breadcrumb] ? translateData[breadcrumb] : breadcrumb;
};

/**
 * Get a random anime from the season for season card display purpose
 * @param {number} year The year of the selected season
 * @param {number} month The month of the selected season
 * @returns a random bangumi id
 */
export const getRandomAnime = (year, month) => {
  const range = getSeasonRange(parseInt(year), parseInt(month));

  const items = JSON.parse(localStorage.getItem("bd_items")).filter(
    (item) =>
      new Date(item.begin) >= new Date(range[0]) &&
      new Date(item.begin) < new Date(range[1])
  );

  return items.length === 0
    ? 0
    : items[Math.floor(Math.random() * items.length)].sites.find(
        (i) => i.site === "bangumi"
      ).id;
};

/**
 * Check if the current location is in the decade of the selected key
 * @param {string} key collpase state key for the sidebar
 * @param {object} location current location/url
 * @returns boolean value for initializing the collpase state in the sidebar
 */
export const initializedCollapseKey = (key, location) => {
  const path = location.pathname.slice(1, 5);
  const start = new Date(key.slice(0, 4), 1),
    end = new Date(key.slice(4), 1);
  if (parseInt(path)) {
    const curr = new Date(path, 1);
    return start <= curr && curr <= end ? true : false;
  }
};

/**
 * get bangumi-data from local storage by bangumi.tv subject id
 * @param {string} id bangumi.tv id
 * @returns anime data that matches the id
 */
export const getLocalBangumiDataById = (id) => {
  return JSON.parse(localStorage.getItem("bd_items")).filter(
    (item) => item.sites.find((i) => i.site === "bangumi").id === id
  );
};

/**
 * filter out items that do not have a bangumi.tv subject id
 * @param {Array} items items list from bangumi-data
 * @returns filtered array
 */
export const filterItemWithNoBangumiId = (items) => {
  return items.filter(
    (item) => item.sites.find((i) => i.site === "bangumi") !== undefined
  );
};

/**
 * translate weekday number to chinese
 * @param {number} index number represent the weekday, mon = 1
 * @returns weekday in chinese
 */
export const translateWeekday = (index) => {
  return ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"][
    index - 1
  ];
};

/**
 * convert the image url to another url with a different size
 * @param {string} url bangumi image url
 * @param {string} size single character: "l" = large | "c" = common | "m" = middle | "s" = small | "g" = grid
 * @returns an url with a different size
 */
export const swapCoverPictureSize = (url, size) => {
  return url.replace(/(?<=cover)(\/)(.)(\/)/g, `/${size}/`)
}


/**
 * convert a url to one begin with https protocal
 * @param {string} url url of any kind
 * @returns url string begin with https protocal
 */
export const forceHttps = (url) => {
  return url.match(/\/\//g) ? url.replace(/.+(?<=\/\/)/g, "https://") : `https://${url}`
} 
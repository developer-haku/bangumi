import { filterItemWithNoBangumiId } from "../utils/utils";

export const initializeLocalFavorite = () => {
  !localStorage.getItem("favorite") && localStorage.setItem("favorite", "[]");
};

export const initializeLocalSetting = () => {
  !localStorage.getItem("setting") &&
    localStorage.setItem(
      "setting",
      JSON.stringify({
        cardApi: "default",
        pageApi: "default",
        cors: {
          proxy: "heroku",
          url: "https://cors-anywhere.herokuapp.com/",
        },
      })
    );
};

export const initializeLocalYearList = (items) => {
  let years = [];
  items.forEach((b) => {
    const year = new Date(b.begin).getFullYear();
    if (!years.includes(year)) years.push(year);
  });
  localStorage.setItem("years", JSON.stringify(years));
};

export const initializeLocalBangumiData = (version, data) => {
  localStorage.setItem("bd_version", version);
  localStorage.setItem("bd_site_meta", JSON.stringify(data.siteMeta));
  localStorage.setItem(
    "bd_items",
    JSON.stringify(filterItemWithNoBangumiId(data.items))
  );
};

/** This files store utility functions for the project. */

/**
 * Get the year and month and give back the start and end time of the season
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
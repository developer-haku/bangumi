# This script generates the top rated animes of each season.

from dateutil import parser
import datetime
import requests
import json
import time


def getBangumiData():
    return json.loads(
        requests.get(
            "https://cdn.jsdelivr.net/npm/bangumi-data@latest/dist/data.json"
        ).content.decode("utf-8")
    )["items"]


def bgmApiReq(id):
    url = "https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Subject@master/data/{}/{}.json".format(
        int(id / 100), id)
    return json.loads(requests.get(url).content.decode("utf-8"))


def writeToFile(data):
    with open("../json/TopRated.json", "w", encoding="utf8") as toprated_file:
        toprated_file.write(
            json.dumps(
                data,
                indent=4,
                ensure_ascii=False
            )
        )


def getBangumiId(anime):
    for site in anime["sites"]:
        if site["site"] == "bangumi":
            return site["id"]


def getSeasonRange(year, month):
    startMonth = 0
    endMonth = 0
    endYear = year

    if month >= 1 and month < 4:
        startMonth = 1
        endMonth = 4
    elif month >= 4 and month < 7:
        startMonth = 4
        endMonth = 7
    elif month >= 7 and month < 10:
        startMonth = 7
        endMonth = 10
    elif month >= 10:
        startMonth = 10
        endMonth = 1
        endYear += 1

    return [
        str(year) + "-" + str(startMonth).zfill(2) + "-01T00:00:00.000Z",
        str(endYear) + "-" + str(endMonth).zfill(2) + "-01T00:00:00.000Z"
    ]


def blacklistFilter(anime):
    blacklist = []

    with open("../json/Blacklist.json", "r", encoding="utf8") as blacklist_file:
        blacklist = json.loads(blacklist_file.read())

    return False if anime["title"] in blacklist else True


def seasonFilter(range, anime):
    dates = [
        parser.isoparse(anime["begin"]),  # anime begin date
        parser.isoparse(range[0]),  # season range start
        parser.isoparse(range[1])  # season range end
    ]
    return True if dates[0] >= dates[1] and dates[0] < dates[2] else False


def main():
    # First month of each season
    SEASON_MONTH = [1, 4, 7, 10]
    # Highest Rating Possible, Prevent signle vote high score
    HIGHEST_POSSIBLE = 9.2
    # Filter out anime without bangumi id, run ProblemDataSearch.py first
    items = list(filter(blacklistFilter, getBangumiData()))
    # Get the year of the fist anime in the list
    year = parser.isoparse(items[0]["begin"]).year
    # Counter for the current number of anime that has searched
    counter = 0

    # !JSON object that holds the top rated anime of each season
    topRated = {}


    for y in range(year, datetime.datetime.now().year + 1):
        for m in SEASON_MONTH:
            currentSeason = list(
                filter(lambda i: seasonFilter(getSeasonRange(y, m), i), items))
            currentSeasonBestRating = 0
            currentSeasonBestAnimeId = 0
            for anime in currentSeason:
                counter += 1
                animeId = int(getBangumiId(anime))
                animeData = bgmApiReq(animeId)
                try:
                    if animeData["rating"]["score"] > currentSeasonBestRating \
                            and animeData["rating"]["score"] < HIGHEST_POSSIBLE \
                            and animeData["rating"]["total"] > 1:
                        currentSeasonBestRating = animeData["rating"]["score"]
                        currentSeasonBestAnimeId = animeId
                except KeyError:
                    print("[" + str(animeId) + "]: NO RATING SKIP")

            if len(currentSeason) > 0 and currentSeasonBestRating == 0:
                currentSeasonBestAnimeId = int(getBangumiId(currentSeason[0]))
                currentSeasonBestRating = bgmApiReq(currentSeasonBestAnimeId)[
                    "rating"]["score"]

            print("[" + str(y) + ", " + str(m) + "](" + str(counter) + "):\t" +
                  str(currentSeasonBestRating) + " / " + str(currentSeasonBestAnimeId))

            topRated.update(
                {str(y) + str(m).zfill(2): currentSeasonBestAnimeId})

            writeToFile(topRated)

        print()


if __name__ == "__main__":
    main()

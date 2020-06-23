# This script look for animes that may cause problems to the site and add them to the blacklist.

# RULES(TEMPORARY, MAY ADD MORE IN THE FUTURE):
# 1. missing bangumi id

import requests
import json


def main():
    # initialize blacklist
    blacklist = []

    # get bangumi-data
    items = json.loads(
        requests.get(
            "https://cdn.jsdelivr.net/npm/bangumi-data@latest/dist/data.json"
        ).content.decode("utf-8")
    )["items"]

    # find data without bangumi id and add to blacklist
    for item in items:
        foundBangumiID = False
        for site in item["sites"]:
            if(site["site"] == "bangumi"):
                foundBangumiID = True
        if not foundBangumiID:
            blacklist.append(item["title"])

    # write to blacklist file
    with open("../json/Blacklist.json", "w", encoding="utf8") as blacklist_file:
        blacklist_file.write(
            json.dumps(
                [] if len(blacklist) == 0 else blacklist,
                indent=4,
                ensure_ascii=False
            )
        )


if __name__ == "__main__":
    main()

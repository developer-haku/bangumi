# HOW TO USE

[中文说明](#中文说明)

## Require

> Python 3+

## Scripts

`ProblemDataSearch.py`:  
Look for data that may cause problem, current look for data that doesn't have a bangumi id

`TopOfTheSeason.py`:  
Get the top rated anime of each season base on bangumi.tv data

> :warning: Base on your network connection speed,`TopOfTheSeason.py` may take a long time to run

## Run

Run `ProblemDataSearch.py` first before `TopOfTheSeason.py` to get the `Blacklist.json`, `TopOfTheSeason.py` may have erros unhandled if any chunk of data is missing a bangumi id.

Commands:

```shell
py ProblemDataSearch.py
py TopOfTheSeason.py
```

## Generated Data Format

***
`ProblemDataSearch.py` > `Blacklist.json`:

```json
["Anime_Title_1", "Anime_Title_2", "Anime_Title_3", ...]
```

> Each element holds the title of the blacklisted anime that's extracted from bangumi-data

***
`TopOfTheSeason.py` > `TopRated.json`:

```json
{
    "196001": 123,
    "196004": 456,
    "196007": 0,
    "196010": 789,
    "196101": 0,
    ...
```

> `key`: = year + month, (ex: 1960 + 01 = 196001, 196001 represents the winter anime season of 1960)  
> month: 01(WINTER), 04(SPRING), 07(SUMMER), 10(AUTUMN)  
> `value`: is the bangumi id from bangumi.tv, 0 means there is no anime data from that season

## 中文说明

## 需求

> Python 3+

## 脚本

`ProblemDataSearch.py`:  
查找可能会出问题的数据，现暂时用于查照没有bangumi id的数据

`TopOfTheSeason.py`:  
基于bangumi.tv的数据来获取每季度最高评分的番剧+

> :warning: 基于你的网络连接速度, `TopOfTheSeason.py` 可能会运行比较长的时间

## 运行

运行 `ProblemDataSearch.py` 之前要运行 `TopOfTheSeason.py` 来获取 `Blacklist.json`, 如果某串数据没有bangumi id的话 `TopOfTheSeason.py` 在运行时会发生错误。

命令行:

```shell
py ProblemDataSearch.py
py TopOfTheSeason.py
```

## 生成数据的格式

***
`ProblemDataSearch.py` > `Blacklist.json`:

```json
["番剧标题_1", "番剧标题_2", "番剧标题_3", ...]
```

> 每个元素是从bangumi-data抽出取来番剧标题

***
`TopOfTheSeason.py` > `TopRated.json`:

```json
{
    "196001": 123,
    "196004": 456,
    "196007": 0,
    "196010": 789,
    "196101": 0,
    ...
```

> `key`: = 年 + 月, (例: 1960 + 01 = 196001, 196001 表示1960年的冬季番)  
> month: 01(冬季番), 04(春季番), 07(夏季番), 10(秋季番)  
> `value`: 用于bangumi.tv的bangumi id

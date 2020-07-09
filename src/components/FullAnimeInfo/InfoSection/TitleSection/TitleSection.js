import React, { useState, useEffect } from "react";
import { Link, Typography, IconButton } from "@material-ui/core";
import {
  AccessTime,
  CalendarToday,
  Favorite,
  FavoriteBorder,
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import styles from "./TitleSection.module.css";
import {
  translateWeekday,
  getLocalBangumiDataById,
} from "../../../../utils/utils";

const TitleSection = (props) => {
  const [isFav, setIsFav] = useState(false);
  const weekday = translateWeekday(props.weekday);
  const siteMeta = JSON.parse(localStorage.getItem("bd_site_meta"));
  const data = getLocalBangumiDataById(props.id.toString());
  let links = null;

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favorite"));
    if (favList.includes(props.id.toString())) setIsFav(true);
  }, [props.id]);

  if (data.length === 1) {
    links = data[0].sites
      .map((site) => {
        return (
          <Link
            className={styles.link}
            color="inherit"
            key={site.site}
            onClick={() => siteHandler(site.site, site.id)}
          >
            {siteMeta[site.site].title}
          </Link>
        );
      })
      .sort((a, b) => (a.key === "bangumi" ? 0 : 1));

    links.unshift(
      <Link
        className={styles.link}
        key="official"
        color="inherit"
        onClick={() => openTargetSite(data[0].officialSite)}
      >
        官方网站
      </Link>
    );

    links.push(
      <Link
        className={styles.link}
        color="inherit"
        key="dmhy"
        onClick={() =>
          openTargetSite(
            siteMeta.dmhy.urlTemplate.replace("{{id}}", props.titleCN)
          )
        }
      >
        动漫花园
      </Link>
    );
  }

  const openTargetSite = (url) => {
    window.open(url);
  };

  const siteHandler = (site, id) => {
    window.open(siteMeta[site].urlTemplate.replace("{{id}}", id));
  };

  const fav = () => {
    let favList = JSON.parse(localStorage.getItem("favorite"));
    if (favList.includes(props.id.toString())) {
      favList.splice(favList.indexOf(props.id.toString()), 1);
    } else {
      favList.push(props.id.toString());
    }
    localStorage.setItem("favorite", JSON.stringify(favList));
    setIsFav(!isFav);
  };

  return (
    <div className={styles.titleSection}>
      <img className={styles.coverImage} src={props.image} alt="coverimage" />
      <div className={styles.titleInfo}>
        <div className={styles.basicInfo}>
          <Typography variant="h5" className={styles.titleCN}>
            {props.titleCN !== "" ? props.titleCN : props.titleJP}
            <IconButton className={styles.favIcon} size="small" onClick={fav}>
              {isFav ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Typography>
          <Typography variant="subtitle2" className={styles.titleJP}>
            {props.titleJP}
          </Typography>
          <Typography className={styles.bangumiRating} variant="subtitle2">
            Bangumi评分：
            <Rating
              className={styles.rating}
              name="bangumi-rating"
              size="small"
              max={10}
              defaultValue={0}
              value={props.rating}
              precision={0.1}
              disabled={props.rating ? false : true}
              readOnly
            />
            {props.rating}
          </Typography>
          <Typography className={styles.time} variant="subtitle2">
            <AccessTime fontSize="small" className={styles.icon} />
            {props.airDate}
            {" | "}
            <CalendarToday fontSize="small" className={styles.icon} />
            {weekday}
          </Typography>
          <Typography className={styles.links} variant="subtitle2">
            {links.map((link) => {
              return [
                link,
                links.indexOf(link) === links.length - 1 ? "" : " | ",
              ];
            })}
          </Typography>
        </div>
        <div className={styles.summaryInfo}>
          <Typography variant="subtitle2" className={styles.summary}>
            {props.summary}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;

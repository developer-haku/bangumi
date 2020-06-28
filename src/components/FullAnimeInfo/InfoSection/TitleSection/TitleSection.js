import React, { useState, useEffect } from "react";
import { Link, Typography } from "@material-ui/core";
import { AccessTime, CalendarToday } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import ColorThief from "colorthief";

import styles from "./TitleSection.module.css";
import {
  translateWeekday,
  toRGB,
  lightOrDark,
  getLocalBangumiDataById,
} from "../../../../utils/utils";

const TitleSection = (props) => {
  const [textColor, setTextColor] = useState(styles.darkText);
  const imgRef = React.createRef();
  const weekday = translateWeekday(props.weekday);
  const siteMeta = JSON.parse(localStorage.getItem("bd_site_meta"));
  const data = getLocalBangumiDataById("" + props.id);
  const regex = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
  let links = null;

  const imgOnLoad = () => {
    const colorThief = new ColorThief();
    const img = imgRef.current;
    const results = colorThief
      .getPalette(img, 20, 10)
      .map((result) => lightOrDark(toRGB(result)));
    if (results.filter((e) => e === "dark").length >= 10)
      setTextColor(styles.lightText);
  };

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

  console.log(props.titleCN);

  return (
    <div className={styles.titleSection}>
      <img
        crossOrigin={"anonymous"}
        ref={imgRef}
        className={styles.coverImage}
        src={"http://localhost:56789/" + props.image}
        alt="coverimage"
        onLoad={imgOnLoad}
      />
      <div className={styles.titleInfo}>
        <div className={styles.basicInfo + " " + textColor}>
          <Typography variant="h5" className="titleCN">
            {props.titleCN !== "" ? props.titleCN : props.titleJP}
          </Typography>
          <Typography variant="subtitle2" className="titleJP">
            {props.titleJP}
          </Typography>
          <Typography variant="subtitle2">
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

import React from "react";
import { Typography } from "@material-ui/core";

import AnimeMiniCard from "../AnimeMiniCard/AnimeMiniCard";
import styles from "./AnimeColumnList.module.css";

import SundayIcon from "../../assets/images/weekdays/sunday.svg";
import MondayIcon from "../../assets/images/weekdays/monday.svg";
import TuesdayIcon from "../../assets/images/weekdays/tuesday.svg";
import WednesdayIcon from "../../assets/images/weekdays/wednesday.svg";
import ThursdayIcon from "../../assets/images/weekdays/thursday.svg";
import FridayIcon from "../../assets/images/weekdays/friday.svg";
import SaturdayIcon from "../../assets/images/weekdays/saturday.svg";

const AnimeColumnList = (props) => {
  const weekdayIcon = [
    SundayIcon,
    MondayIcon,
    TuesdayIcon,
    WednesdayIcon,
    ThursdayIcon,
    FridayIcon,
    SaturdayIcon,
  ];

  const weekdayCN = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  return (
    <div className={styles.column}>
      <img className={styles.icon} src={weekdayIcon[props.weekday]} alt="weekday-icon" />
      <Typography className={styles.weekday} variant="h6" >{weekdayCN[props.weekday]}</Typography>
      {props.list.map((l) => (
        <AnimeMiniCard key={props.list.indexOf(l)} anime={l} />
      ))}
    </div>
  );
};

export default AnimeColumnList;

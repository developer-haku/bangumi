import React, { useState, useEffect } from "react";
import { Card, Button, Typography, CardMedia } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import axios from "axios";

import styles from "./SeasonCard.module.css";
import top from "../../../../../config/json/TopRated.json";
import NotFoundImage from "../../../../../assets/images/season_empty.jpg";
import NotAirImage from "../../../../../assets/images/not_air.jpg";
import SeasonCharacter from "./SeasonCharacter/SeasonCharacter";

const SeasonButton = (props) => {
  const [bgmApiData, setBgmApiData] = useState(null);
  const [buttonStyle, setButtonStyle] = useState(styles.bottomButton);
  const [imageStyle, setImageStyle] = useState(styles.coverImage);
  let cardStyle = styles.card;
  const seasonStarted =
    new Date(props.year, parseInt(props.month) - 1) < new Date();
  let location = useLocation();

  useEffect(() => {
    if (top[props.year + props.month] !== 0 && seasonStarted) {
      // 国内可能出问题
      const url =
        "http://localhost:56789/https://api.bgm.tv/subject/" +
        top[props.year + props.month] +
        "?responseGroup=small";

      if (!bgmApiData) {
        axios
          .get(url)
          .then((res) => {
            setBgmApiData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [bgmApiData, props.month, props.year, seasonStarted]);

  if (props.left) cardStyle += " " + styles.leftCard;
  else if (props.center) cardStyle += " " + styles.centerCard;
  else if (props.right) cardStyle += " " + styles.rightCard;

  if (seasonStarted) cardStyle += " " + styles.pointer;

  const showBottomButton = () => {
    if (seasonStarted) {
      setButtonStyle(buttonStyle + " " + styles.moveButtonUp);
      setImageStyle(imageStyle + " " + styles.imgTransform);
    }
  };

  const hideBottomButton = () => {
    setButtonStyle(styles.bottomButton);
    setImageStyle(styles.coverImage);
  };

  const seasonRedirect = () => {
    window.open(location.pathname + "/" + props.month, "_self");
  };

  return (
    <Card
      className={cardStyle}
      onMouseOver={showBottomButton}
      onMouseOut={hideBottomButton}
      onClick={seasonRedirect}
    >
      <SeasonCharacter className={styles.character} season={props.season} />
      <CardMedia
        className={imageStyle}
        component="img"
        image={
          !bgmApiData
            ? top[props.year + props.month] === 0
              ? NotFoundImage
              : seasonStarted
              ? ""
              : NotAirImage
            : bgmApiData.images.large
        }
      />
      <div className={buttonStyle}>
        <div className={styles.buttonText}>
          <p className={styles.buttonTextSeason}>
            {props.year + "年" + parseInt(props.month) + "月番"}
          </p>
          <p className={styles.buttonTextMore}>查看更多</p>
        </div>
      </div>
    </Card>
  );
};

export default SeasonButton;

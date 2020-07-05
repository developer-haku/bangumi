import React, { useState, useEffect, useRef } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";

import styles from "./SeasonCard.module.css";
import { getRandomAnime } from "../../../../../utils/utils";
import NotFoundImage from "../../../../../assets/images/season_empty.jpg";
import NotAirImage from "../../../../../assets/images/not_air.jpg";
import AnimeDataService from "../../../../../service/AnimeDataService";

// Icon by mynamepong @ https://www.flaticon.com/authors/mynamepong
import SpringIcon from "../../../../../assets/images/seasons/spring.svg";
// Icon by Freepik @ https://www.flaticon.com/authors/freepik
import SummerIcon from "../../../../../assets/images/seasons/summer.svg";
import AutumnIcon from "../../../../../assets/images/seasons/autumn.svg";
import WinterIcon from "../../../../../assets/images/seasons/winter.svg";

const SeasonButton = (props) => {
  const [buttonStyle, setButtonStyle] = useState(styles.bottomButton);
  const [coverImage, setCoverImage] = useState("");
  const [imageStyle, setImageStyle] = useState(styles.coverImage);
  const location = useLocation();
  const history = useHistory();
  const prevYear = usePrevious(props.year);
  const ads = new AnimeDataService();

  let cardStyle = styles.card;
  const seasonStarted =
    new Date(props.year, parseInt(props.month) - 1) < new Date();
  const seasonIcon =
    props.season === "SPRING"
      ? SpringIcon
      : props.season === "SUMMER"
      ? SummerIcon
      : props.season === "AUTUMN"
      ? AutumnIcon
      : WinterIcon;

  useEffect(() => {
    if (coverImage === "" || prevYear !== props.year) {
      let randomId = getRandomAnime(props.year, props.month);
      if (randomId !== 0)
        ads.getBangumiDataBasic(randomId).then((data) => {
          setCoverImage(data.image);
        });
      else setCoverImage(NotFoundImage);
    }
  }, [ads, coverImage, props.year, props.month, seasonStarted, prevYear]);

  /** code for css */
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

  //********************************************************//

  const seasonRedirect = () => {
    if (seasonStarted) history.push(location.pathname + "/" + props.month);
  };

  return (
    <Card
      className={cardStyle}
      onMouseOver={showBottomButton}
      onMouseOut={hideBottomButton}
      onClick={seasonRedirect}
    >
      <CardMedia
        className={imageStyle}
        component="img"
        image={seasonStarted ? coverImage : NotAirImage}
      />
      <div className={buttonStyle}>
        <div className={styles.buttonText}>
          <img
            className={styles.seasonIcon}
            src={seasonIcon}
            alt={props.season}
          />
          <p className={styles.buttonTextSeason}>
            {props.year + "年" + parseInt(props.month) + "月番"}
          </p>
          {/* <p className={styles.buttonTextMore}>查看更多</p> */}
        </div>
      </div>
    </Card>
  );
};

// Custom hook
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default SeasonButton;

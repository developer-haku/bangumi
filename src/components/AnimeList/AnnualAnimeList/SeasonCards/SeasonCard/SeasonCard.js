import React, { useState, useEffect } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import styles from "./SeasonCard.module.css";
import { getRandomAnime } from "../../../../../utils/utils";
import NotFoundImage from "../../../../../assets/images/season_empty.jpg";
import NotAirImage from "../../../../../assets/images/not_air.jpg";

// Icon by mynamepong @ https://www.flaticon.com/authors/mynamepong
import SpringIcon from "../../../../../assets/images/seasons/spring.svg";
// Icon by Freepik @ https://www.flaticon.com/authors/freepik
import SummerIcon from "../../../../../assets/images/seasons/summer.svg";
import AutumnIcon from "../../../../../assets/images/seasons/autumn.svg";
import WinterIcon from "../../../../../assets/images/seasons/winter.svg";

const SeasonButton = React.memo((props) => {
  const [buttonStyle, setButtonStyle] = useState(styles.bottomButton);
  const [coverImage, setCoverImage] = useState("");
  const [imageStyle, setImageStyle] = useState(styles.coverImage);
  const location = useLocation();
  let history = useHistory();

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
    const randomId = getRandomAnime(props.year, props.month);
    if (randomId !== 0)
      axios
        .get(
          "http://localhost:56789/https://api.bgm.tv/subject/" +
            randomId +
            "?responseGroup=small"
        )
        .then((res) => {
          setCoverImage(res.data.images.large);
        })
        .catch((err) => {
          console.log(err);
        });
    else if (seasonStarted) setCoverImage(NotFoundImage);
    else setCoverImage(NotAirImage);
  }, [props.month, props.year, seasonStarted]);

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
      <CardMedia className={imageStyle} component="img" image={coverImage} />
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
});

export default SeasonButton;

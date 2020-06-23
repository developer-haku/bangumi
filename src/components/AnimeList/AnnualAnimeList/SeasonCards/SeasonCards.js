import React from "react";
import { ButtonGroup, Divider } from "@material-ui/core";

import SeasonButton from "./SeasonCard/SeasonCard";
import styles from "./SeasonCards.module.css";

const SeasonCard = (props) => {
  return (
    <React.Fragment>
      <Divider />
      <ButtonGroup className={styles.season}>
        <SeasonButton
          season="WINTER"
          character="冬"
          left
          year={props.year}
          month="01"
        />
        <SeasonButton
          season="SPRING"
          character="春"
          center
          year={props.year}
          month="04"
        />
        <SeasonButton
          season="SUMMER"
          character="夏"
          center
          year={props.year}
          month="07"
        />
        <SeasonButton
          season="AUTUMN"
          character="秋"
          right
          year={props.year}
          month="10"
        />
      </ButtonGroup>
    </React.Fragment>
  );
};

export default SeasonCard;

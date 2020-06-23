import React from "react";

import styles from "./SeasonCharacter.module.css";

const SeasonCharacter = (props) => {
  let character = "";
  if (props.season === "SPRING") character = "春";
  else if (props.season === "SUMMER") character = "夏";
  else if (props.season === "AUTUMN") character = "秋";
  else if (props.season === "WINTER") character = "冬";

  return <p className={styles.character}>{character}</p>;
};

export default SeasonCharacter;

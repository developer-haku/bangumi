import React from "react";

import styles from "./InfoSection.module.css";
import TitleSection from "./TitleSection/TitleSection";
import DetailSection from "../InfoSection/DetailSection/DetailSection";

const InfoSection = (props) => {
  return (
    <div className={styles.infoSection}>
      <TitleSection
        id={props.data.id}
        image={props.data.images.large}
        titleCN={props.data.name_cn}
        titleJP={props.data.name}
        airDate={props.data["air_date"]}
        weekday={props.data["air_weekday"]}
        rating={props.data.rating && props.data.rating.score}
        summary={props.data.summary}
      />
      <DetailSection data={props.data} />
    </div>
  );
};

export default InfoSection;

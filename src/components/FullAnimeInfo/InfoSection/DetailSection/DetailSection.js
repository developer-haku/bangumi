import React from "react";

import styles from "./DetailSection.module.css";
import ProductionDetail from "./ProductionDetail/ProductionDetail";
import EpisodeDetail from "./EpisodeDetail/EpisodeDetail";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import StaffDetail from "./StaffDetail/StaffDetail";
import RatingDetail from "./RatingDetail/RatingDetail";
import TagDetail from "./TagDetail/TagDetail";

const DetailSection = (props) => {
  return (
    <div className={styles.detailSection}>
      <div className={styles.left}>
        <ProductionDetail info={props.data.production} />
      </div>
      <div className={styles.center}>
        {props.data.eps && <EpisodeDetail episodes={props.data.eps} />}
        {props.data.crt && <CharacterDetail characters={props.data.crt} />}
        {props.data.staff && <StaffDetail staffs={props.data.staff} />}
      </div>
      <div className={styles.right}>
        {props.data.rating && <RatingDetail rating={props.data.rating} />}
        <TagDetail tags={props.data.tags} />
      </div>
    </div>
  );
};

export default DetailSection;

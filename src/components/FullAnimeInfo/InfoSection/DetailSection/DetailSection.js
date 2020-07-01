import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./DetailSection.module.css";
import ProductionDetail from "./ProductionDetail/ProductionDetail";
import EpisodeDetail from "./EpisodeDetail/EpisodeDetail";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import StaffDetail from "./StaffDetail/StaffDetail";
import RatingDetail from "./RatingDetail/RatingDetail";
import TagDetail from "./TagDetail/TagDetail";

const DetailSection = (props) => {
  const [bgmSbjData, setBgmSbjData] = useState(null);

  useEffect(() => {
    if (!bgmSbjData) {
      axios
        .get(
          `https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Subject@master/data/${parseInt(
            props.data.id / 100
          )}/${props.data.id}.json`
        )
        .then((res) => {
          setBgmSbjData(res.data);
        });
    }
  }, [bgmSbjData, props.data.id]);

  return (
    <div className={styles.detailSection}>
      <div className={styles.left}>
        <ProductionDetail info={bgmSbjData ? bgmSbjData.info : ""} />
      </div>
      <div className={styles.center}>
        {props.data.eps && <EpisodeDetail episodes={props.data.eps} />}
        {props.data.crt && <CharacterDetail characters={props.data.crt} />}
        {props.data.staff && <StaffDetail staffs={props.data.staff} />}
      </div>
      <div className={styles.right}>
        {props.data.rating && <RatingDetail rating={props.data.rating} />}
        <TagDetail tags={bgmSbjData ? bgmSbjData.tags : []} />
      </div>
    </div>
  );
};

export default DetailSection;

import React from "react";
import { Typography, Divider } from "@material-ui/core";

import styles from "./EpisodeDetail.module.css";
import EpisodeButton from "./EpisodeButton/EpisodeButton";

const EpisodeDetail = (props) => {
  return (
    <div className={styles.episodeDetail}>
      <Typography variant="body1" className={styles.header}>
        选集列表
      </Typography>
      <Divider className={styles.divider} />
      <div className={styles.episodeList}>
        {props.episodes.map((eps) => (
          <EpisodeButton eps={eps} key={eps.id} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetail;

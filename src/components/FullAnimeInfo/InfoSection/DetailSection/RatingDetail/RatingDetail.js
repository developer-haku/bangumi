import React from "react";
import { LinearProgress, Tooltip, Typography, Divider } from "@material-ui/core";
import {
  LinearProgress,
  Tooltip,
  Typography,
  Divider,
} from "@material-ui/core";

import styles from "./RatingDetail.module.css";

const RatingDetail = (props) => {
  let ratingChart = [];

  for (let i = 1; i < 11; i++) {
    ratingChart.push(
      <React.Fragment key={i}>
        <Typography className={styles.ratingNum} variant="caption">
          {i}
        </Typography>
        <Tooltip title={props.rating.count[`${i}`]}>
          <LinearProgress
            className={styles.bar}
            variant="determinate"
            value={parseInt(
              (props.rating.count[`${i}`] / props.rating.total) * 100
            )}
            valueBuffer={100}
          />
        </Tooltip>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.ratingDetail}>
      <Divider className={styles.divider} />
      <div className={styles.ratingChart}>{ratingChart}</div>
    </div>
  );
};

export default RatingDetail;

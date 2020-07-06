import React from "react";
import { Card, CardContent, CardActions, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import styles from "./AnimeCard.module.css";

const AnimeCardSkeleton = () => {
  return (
    <Card className={styles.card}>
      <Skeleton
        height={225}
        variant="rect"
        animation="wave"
        className={styles.coverImage}
      />
      <CardContent className={styles.cardContent}>
        <Skeleton variant="text" animation="wave" className={styles.title} />
      </CardContent>
      <CardContent className={styles.rating}>
        <Skeleton
          variant="text"
          animation="wave"
          width="60%"
          className={styles.ratingSkl}
        />
      </CardContent>
      <Divider />
      <CardActions className={styles.cardActions}>
        <Skeleton
          variant="circle"
          animation="wave"
          height={28}
          width={28}
          className={styles.favIcon}
        />
      </CardActions>
    </Card>
  );
};

export default AnimeCardSkeleton;

import React from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";

import ProfilePlaceholderImage from "../../../../../../assets/images/profile_placeholder.png";
import styles from "./StaffCard.module.css";

const StaffCard = (props) => {
  return (
    <Card className={styles.staffCard}>
      <CardMedia
        className={styles.profileImage}
        image={
          props.staff.images
            ? props.staff.images.medium
            : ProfilePlaceholderImage
        }
        onClick={() => {
          window.open(props.staff.url);
        }}
      />
      <div className={styles.staffInfo}>
        <Typography variant="body1">{props.staff.name}</Typography>
        {props.staff["name_cn"] === "" ? null : (
          <Typography variant="body2">
            {"中文名：" + props.staff["name_cn"]}
          </Typography>
        )}
        {props.staff.jobs.map((job) => (
          <Typography key={job} className={styles.job} variant="caption">
            {job}
          </Typography>
        ))}
      </div>
    </Card>
  );
};

export default StaffCard;

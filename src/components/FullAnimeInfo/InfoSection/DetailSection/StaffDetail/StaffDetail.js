import React from "react";
import { Typography, Divider } from "@material-ui/core";

import StaffCard from "./StaffCard/StaffCard";
import styles from "./StaffDetail.module.css";

const StaffDetail = (props) => {
  return (
    <div className={styles.staffDetail}>
      <Typography variant="body1" className={styles.header}>
        制作人员
      </Typography>
      <Divider className={styles.divider} />
      <div className={styles.staffList}>
      {props.staffs.map((staff) => (
        <StaffCard key={staff.id} staff={staff} />
      ))}
      </div>
    </div>
  );
};

export default StaffDetail;

import React from "react";
import { Typography, Divider } from "@material-ui/core";

import StaffCard from "./StaffCard/StaffCard";
import styles from "./StaffDetail.module.css";

const StaffDetail = (props) => {
  return (
    <div>
      <Typography variant="body1" className={styles.header}>制作人员</Typography>
      <Divider />
      {props.staffs.map((staff) => (
        <StaffCard key={staff.id} staff={staff}/>
      ))}
    </div>
  );
};

export default StaffDetail;

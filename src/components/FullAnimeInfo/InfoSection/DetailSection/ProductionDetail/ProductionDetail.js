import React from "react";

import styles from "./ProductionDetail.module.css";
import { Typography, Divider } from "@material-ui/core";

const ProductionDetail = (props) => {
  const infoList = props.info.match(/(?<=<li>)([\s\S]*?)(?=<\/li>)/gm);

  const parsedInfo =
    infoList && infoList.map((m) => m.replace(/(<([^>]+)>)/gi, ""));

  return (
    <div className={styles.productionDetail}>
      <Typography variant="body1" className={styles.header}>制作信息</Typography>
      <Divider className={styles.divider} />
      {infoList &&
        parsedInfo.map((m) => {
          return (
            <Typography
              className={styles.parsedInfo}
              key={Math.random()}
              variant="subtitle2"
            >
              {m}
            </Typography>
          );
        })}
    </div>
  );
};

export default ProductionDetail;

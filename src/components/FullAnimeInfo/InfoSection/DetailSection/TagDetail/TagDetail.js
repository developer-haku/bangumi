import React from "react";
import { Typography, Tooltip, Divider } from "@material-ui/core";

import styles from "./TagDetail.module.css";

const TagDetail = (props) => {
  return (
    <div>
      <Typography variant="body1" className={styles.header}>标签云</Typography>
      <Divider />
      {props.tags.map((tag) => (
        <Tooltip key={tag.name} title={"标记数：" + tag.count} arrow>
          <Typography className={styles.tag} variant="subtitle2">
            {tag.name}
          </Typography>
        </Tooltip>
      ))}
    </div>
  );
};

export default TagDetail;

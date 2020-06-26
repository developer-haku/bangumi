import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Home, History } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import Myne from "../../assets/images/myne_cry.png";
import styles from "./Error.module.css";

const Error = () => {
  let history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.error}>
      <img className={styles.myne} src={Myne} alt="Myne" />
      <Typography variant="h4" paragraph align="center">
        ここは出入り禁止だ！
      </Typography>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          variant="outlined"
          color="primary"
          startIcon={<History />}
          onClick={goBack}
        >
          返回前一页
        </Button>
        <Button
          className={styles.button}
          variant="outlined"
          color="primary"
          startIcon={<Home />}
          onClick={goHome}
        >
          回到首页
        </Button>
      </div>
    </div>
  );
};

export default Error;

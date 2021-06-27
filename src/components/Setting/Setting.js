import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@material-ui/core";

import styles from "./Setting.module.css";

const Setting = (props) => {
  const [cardApi, setCardApi] = useState(
    JSON.parse(localStorage.getItem("setting")).cardApi
  );
  const [pageApi] = useState(
    JSON.parse(localStorage.getItem("setting")).pageApi
  );
  const [cors] = useState(
    JSON.parse(localStorage.getItem("setting")).cors.proxy
  );
  const [corsUrl] = useState(
    JSON.parse(localStorage.getItem("setting")).cors.url
  );

  const apply = () => {
    localStorage.setItem(
      "setting",
      JSON.stringify({
        cardApi: cardApi,
        pageApi: pageApi,
        cors: {
          proxy: cors,
          url:
            cors === "custom"
              ? corsUrl.slice(-1) !== "/"
                ? corsUrl + "/"
                : corsUrl
              : "https://cors-anywhere.herokuapp.com/",
        },
      })
    );
    props.close();
    window.location.reload();
  };

  const cardApiChangeHandler = (event) => {
    setCardApi(event.target.value);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      maxWidth="lg"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>设置</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">番剧列表API源</FormLabel>
          <RadioGroup value={cardApi} onChange={cardApiChangeHandler}>
            <FormControlLabel
              control={<Radio color="primary" />}
              value="default"
              label="Bangumi-GA(默认)"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="bangumiSubject"
              label="Bangumi-Subject"
            />
          </RadioGroup>
          <Divider className={styles.divider} />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} variant="outlined" color="secondary">
          取消
        </Button>
        <Button onClick={apply} variant="outlined" color="primary">
          应用
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Setting;

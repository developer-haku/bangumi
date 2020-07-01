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
  TextField,
  Divider,
} from "@material-ui/core";

import styles from "./Setting.module.css";

const Setting = (props) => {
  const [api, setApi] = useState(
    JSON.parse(localStorage.getItem("setting")).api
  );
  const [cors, setCors] = useState(
    JSON.parse(localStorage.getItem("setting")).cors.proxy
  );
  const [corsUrl, setCorsUrl] = useState(
    JSON.parse(localStorage.getItem("setting")).cors.url
  );
  const [helperText, setHelperText] = useState("");

  const apply = () => {
    if (cors === "custom" && corsUrl === "") {
      setHelperText("URL不能是空白");
      return;
    } else {
      localStorage.setItem(
        "setting",
        JSON.stringify({
          api: api,
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
    }
  };

  const apiChangeHandler = (event) => {
    setApi(event.target.value);
  };

  const corsChangeHandler = (event) => {
    setCors(event.target.value);
  };

  const corsUrlChangeHandler = (event) => {
    setCorsUrl(event.target.value);
    if (event.target.value !== "") setHelperText("");
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
          <FormLabel component="legend">数据源API选择</FormLabel>
          <RadioGroup value={api} onChange={apiChangeHandler}>
            <FormControlLabel
              control={<Radio color="primary" />}
              value="default"
              label="Bangumi-Subject(默认)"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="subjectAPI"
              label="Bangumi-Subject + Bangumi API(CORS)"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="subjectNetabare"
              label="Bangumi-Subject + Netaba.re"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="bangumiCORS"
              label="Bangumi API(CORS)"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="netabare"
              label="netaba.re"
            />
          </RadioGroup>
          <Divider className={styles.divider} />
          <FormLabel component="legend">CORS代理选择</FormLabel>
          <RadioGroup value={cors} onChange={corsChangeHandler}>
            <FormControlLabel
              control={<Radio color="primary" />}
              value="heroku"
              label="cors-anywhere heroku服务器(海外)"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="custom"
              label={
                <TextField
                  id="cors-custom-url"
                  label="自定义"
                  defaultValue={cors === "custom" ? corsUrl : ""}
                  disabled={cors === "custom" ? false : true}
                  margin="dense"
                  variant="outlined"
                  helperText={helperText}
                  onChange={corsUrlChangeHandler}
                />
              }
            />
          </RadioGroup>
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

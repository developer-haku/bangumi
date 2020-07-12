import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Switch,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Reset = (props) => {
  const [ignoreFav, setIgnoreFav] = useState(true);
  const history = useHistory();

  const reset = () => {
    if (ignoreFav) {
      const savedFav = localStorage.getItem("favorite");
      localStorage.clear();
      localStorage.setItem("favorite", savedFav);
    } else {
      localStorage.clear();
    }
    props.close();
    history.push("/");
    window.location.reload();
  };

  const ignoreFavHandler = () => {
    setIgnoreFav((prevState) => !prevState);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      maxWidth="xs"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{"清除本地所有数据"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          清除的数据都是储存在浏览器的localStorage里面的数据，包括本地bangumi-data数据与收藏的番剧数据，以及设置数据。你确定要清除么？
        </DialogContentText>
        <Divider />
        <DialogContentText>
          保留收藏
          <Switch
            checked={ignoreFav}
            onChange={ignoreFavHandler}
            size="small"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} variant="outlined" color="secondary">
          取消
        </Button>
        <Button onClick={reset} variant="outlined" color="primary">
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Reset;

import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Reset = (props) => {
  const history = useHistory();

  const reset = () => {
    localStorage.clear();
    props.close();
    history.push("/");
    window.location.reload();
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

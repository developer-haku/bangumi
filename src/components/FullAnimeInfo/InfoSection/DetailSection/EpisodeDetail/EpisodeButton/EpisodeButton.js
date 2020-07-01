import React from "react";
import { Button, Tooltip, withStyles } from "@material-ui/core";

import styles from "./EpisodeButton.module.css";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const EpisodeButton = (props) => {
  return (
    // <React.Fragment>
    <HtmlTooltip
      title={
        <React.Fragment>
          <p>
            {"第" + props.eps.sort + "集"}{" "}
            {props.eps["name_cn"] !== ""
              ? ": " + props.eps["name_cn"]
              : props.eps.name !== ""
              ? "：" + props.eps.name
              : ""}
          </p>
          <span>
            {"开播时间：" + props.eps.airdate}
            {props.eps.status === "Air" ? "" : "(未开播)"}
          </span>
        </React.Fragment>
      }
    >
      <Button
        data-tip
        data-for={"" + props.eps.id}
        className={styles.button}
        variant={props.eps.status === "Air" ? "contained" : "outlined"}
        size="small"
        color="primary"
        disableElevation
        disableRipple
        onClick={() => {
          window.open(props.eps.url);
        }}
      >
        {JSON.stringify(props.eps.sort)}
      </Button>
    </HtmlTooltip>
  );
};

export default EpisodeButton;

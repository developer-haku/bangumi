import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu, Settings, GitHub, Cached } from "@material-ui/icons";

import styles from "./Topbar.module.css";
import logo from "../../assets/images/logo.png";

const topbar = (props) => {
  const forwardGithub = () => {
    window.open("https://github.com/developer-haku/bangumi", "_black");
  };

  return (
    <AppBar className={styles.appbar} position="static">
      <Toolbar className={styles.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={props.toggleSidebar}
        >
          <Menu />
        </IconButton>
        <img className={styles.logo} src={logo} alt="logo" />
        <Typography variant="h6">Bangumi</Typography>
        <div className={styles.right}>
          <IconButton
            className={styles.rightItem}
            edge="end"
            color="inherit"
            aria-label="cached"
          >
            <Cached />
          </IconButton>
          <IconButton
            className={styles.rightItem}
            edge="end"
            color="inherit"
            aria-label="github"
            onClick={forwardGithub}
          >
            <GitHub />
          </IconButton>
          <IconButton
            className={styles.rightItem}
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <Settings />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default topbar;

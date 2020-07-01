import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu, Settings, GitHub, Cached } from "@material-ui/icons";

import styles from "./Topbar.module.css";
import logo from "../../assets/images/logo.png";
import ResetAlert from "../Reset/Reset";
import SettingMenu from "../Setting/Setting";

const Topbar = (props) => {
  const [openResetAlert, setOpenResetAlert] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const resetAlert = () => {
    setOpenResetAlert(true);
  };

  const closeAlert = () => {
    setOpenResetAlert(false);
  };

  const settingMenu = () => {
    setOpenMenu(true);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const forwardGithub = () => {
    window.open("https://github.com/developer-haku/bangumi");
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
            aria-label="github"
            onClick={forwardGithub}
          >
            <GitHub />
          </IconButton>
          <IconButton
            className={styles.rightItem}
            edge="end"
            onClick={resetAlert}
            color="inherit"
            aria-label="cached"
          >
            <Cached />
          </IconButton>
          <IconButton
            className={styles.rightItem}
            onClick={settingMenu}
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <Settings />
          </IconButton>
          {openResetAlert && <ResetAlert open={openResetAlert} close={closeAlert} />}
          {openMenu && <SettingMenu open={openMenu} close={closeMenu} />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

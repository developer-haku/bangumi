import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListSubheader,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const [collapseKeys, setCollapseKeys] = useState({
    "19601969": false,
    "19701979": false,
    "19801989": false,
    "19901999": false,
    "20002009": false,
    "20102019": false,
    "20202029": true,
  });

  const classes = useStyles();

  const collapseHandler = (key) => {
    setCollapseKeys({
      ...collapseKeys,
      [key]: !collapseKeys[key],
    });
  };

  const genenerateYearList = () => {
    const min = Math.min(...props.years); // get the first year.
    const max = Math.max(...props.years); // get the last years.
    const start = parseInt(min / 10) * 10; //get the first year of the first decade

    let yearList = [];
    for (let i = start; i <= max; i += 10) {
      yearList.push(
        <Collapse
          in={collapseKeys["" + i + (i + 9)]}
          key={"c" + i + (i + 9)}
          unmountOnExit
        >
          {props.years
            .filter((f) => f >= i && f < i + 10)
            .map((m) => {
              return (
                <ListItem key={m} button>
                  <ListItemText>{m}</ListItemText>
                </ListItem>
              );
            })
            .reverse()}
        </Collapse>
      );
      yearList.push(
        <ListItem
          button
          key={"" + i + (i + 9)}
          onClick={() => collapseHandler("" + i + (i + 9))}
        >
          <ListItemText>
            {i} - {i + 9}
          </ListItemText>
          {collapseKeys["" + i + (i + 9)] ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
      );
    }

    return yearList.reverse();
  };

  const yearList = genenerateYearList();

  return (
    <Drawer
      classes={{
        paper: classes.paper,
      }}
      anchor="left"
      open={props.openSidebar}
      variant="persistent"
    >
      <PerfectScrollbar>
        <List className={styles.list}>
          <ListSubheader>Weekly</ListSubheader>
          <Divider />
          <ListItem button>
            <ListItemText>每周新番</ListItemText>
          </ListItem>
          <ListSubheader>Years</ListSubheader>
          <Divider />
          {yearList.map((m) => {
            return m;
          })}
        </List>
      </PerfectScrollbar>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    top: "64px",
  },
}));

const mapStateToProps = (state) => {
  return {
    years: state.bangumiData.years,
  };
};

export default connect(mapStateToProps)(Sidebar);

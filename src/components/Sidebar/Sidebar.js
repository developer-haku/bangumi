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
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import { isMobile } from "react-device-detect";

import "react-perfect-scrollbar/dist/css/styles.css";
import styles from "./Sidebar.module.css";
import { initializedCollapseKey } from "../../utils/utils";

const Sidebar = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [collapseKeys, setCollapseKeys] = useState({
    "19601969": initializedCollapseKey("19601969", location),
    "19701979": initializedCollapseKey("19701979", location),
    "19801989": initializedCollapseKey("19801989", location),
    "19901999": initializedCollapseKey("19901999", location),
    "20002009": initializedCollapseKey("20002009", location),
    "20102019": initializedCollapseKey("20102019", location),
    "20202029": initializedCollapseKey("20202029", location),
  });
  const [selectedItem, setSelectedItem] = React.useState(location.pathname);
  const years = JSON.parse(localStorage.getItem("years"));

  const collapseHandler = (key) => {
    setCollapseKeys({
      ...collapseKeys,
      [key]: !collapseKeys[key],
    });
  };

  const genenerateYearList = () => {
    const min = Math.min(...years); // get the first year.
    const max = Math.max(...years); // get the last years.
    const start = parseInt(min / 10) * 10; //get the first year of the first decade

    let yearList = [];
    for (let i = start; i <= max; i += 10) {
      yearList.push(
        <Collapse
          in={collapseKeys["" + i + (i + 9)]}
          key={"c" + i + (i + 9)}
          unmountOnExit
        >
          {years
            .filter((f) => f >= i && f < i + 10)
            .map((m) => {
              return (
                <ListItem
                  key={m}
                  selected={selectedItem === "/" + m}
                  button
                  onClick={() => clickHandler("/" + m)}
                >
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

  const yearList = years ? genenerateYearList() : [];

  const clickHandler = (link) => {
    history.push(link);
    setSelectedItem(link);
    isMobile && props.closeSidebar();
  };

  return (
    <Drawer
      anchor="left"
      open={props.openSidebar}
      variant={isMobile ? "temporary" : "persistent"}
      onClose={props.closeSidebar}
    >
      <PerfectScrollbar>
        <List
          className={styles.list}
          style={{ marginTop: !isMobile && "64px" }}
        >
          <ListItem
            button
            selected={selectedItem === "/"}
            onClick={() => clickHandler("/")}
          >
            <ListItemText>首页</ListItemText>
          </ListItem>
          <ListItem
            button
            selected={selectedItem === "/favorite"}
            onClick={() => clickHandler("/favorite")}
          >
            <ListItemText>我的收藏</ListItemText>
          </ListItem>
          <ListSubheader disableSticky>当季新番</ListSubheader>
          <Divider />
          <ListItem
            button
            selected={selectedItem === "/weekly"}
            onClick={() => clickHandler("/weekly")}
          >
            <ListItemText>每周新番</ListItemText>
          </ListItem>
          <ListSubheader disableSticky>历史数据</ListSubheader>
          <Divider />
          {yearList.map((m) => {
            return m;
          })}
        </List>
      </PerfectScrollbar>
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    years: state.bangumiData.years,
  };
};

export default connect(mapStateToProps)(Sidebar);

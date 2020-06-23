import React, { useState } from "react";
import { Box, Card, Tabs, Tab, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

import styles from "./AnnualAnimeList.module.css";
import SeasonCards from "./SeasonCards/SeasonCards";

const YearAnimeList = (props) => {
  let { year } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.seasons}>
      <Card>
        <Typography className={styles.year} variant="h3">
          {year}
        </Typography>
      </Card>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="季度选择" {...a11yProps(0)} />
        <Tab label="全年番剧" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SeasonCards year={year} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default YearAnimeList;

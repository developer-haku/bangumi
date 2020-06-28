import React from "react";
import { Breadcrumbs, Link, Typography, Divider } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import { useLocation, useHistory } from "react-router-dom";

import styles from "./Breadcrumb.module.css";
import { translateBreadcrumb } from "../../utils/utils";

const Breadcrumb = React.memo(() => {
  const pathname = useLocation().pathname;
  const noBreadcrumbPath = ["/", "/error"];

  if (noBreadcrumbPath.includes(pathname)) {
    return null;
  }

  const history = useHistory();
  const crumbs = pathname.split("/").filter((f) => f !== "");

  const linkHandler = (link) => {
    history.push(link);
  };

  console.log(crumbs);

  let crumbLinks = [
    <Link key="home" color="inherit" onClick={() => linkHandler("/")}>
      首页
    </Link>,
  ];

  crumbs.forEach((l) => {
    if (crumbs.indexOf(l) !== crumbs.length - 1) {
      if (l !== "bangumi")
        crumbLinks.push(
          <Link key={l} color="inherit" onClick={() => linkHandler("/" + l)}>
            {translateBreadcrumb(l)}
          </Link>
        );
    } else {
      crumbLinks.push(
        <Typography key={l} color="textPrimary">
          {translateBreadcrumb(l)}
        </Typography>
      );
    }
  });

  return (
    <React.Fragment>
      <Breadcrumbs
        className={styles.breadcrumb}
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {crumbLinks}
      </Breadcrumbs>
      <Divider />
    </React.Fragment>
  );
});

export default Breadcrumb;

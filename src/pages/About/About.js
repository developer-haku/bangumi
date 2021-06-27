import React from "react";
import { Link, Typography, Divider } from "@material-ui/core";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Typography className={styles.header} variant="h4">
        关于Bangumi
      </Typography>
      <Divider />
      <div className={styles.badges}>
        <Link href="https://github.com/developer-haku/bangumi/blob/master/LICENSE">
          <img
            className={styles.badge}
            alt="GitHub"
            src="https://img.shields.io/github/license/developer-haku/bangumi?style=flat-square"
          />
        </Link>
        <Link href="https://github.com/developer-haku/bangumi">
          <img
            className={styles.badge}
            alt="GitHub package.json version (branch)"
            src="https://img.shields.io/github/package-json/v/developer-haku/bangumi/master?label=Build&logo=github&style=flat-square"
          />
        </Link>
        <Link href="https://github.com/developer-haku/bangumi/issues/new">
          <img
            className={styles.badge}
            alt="GitHub Issue"
            src="https://img.shields.io/badge/GitHub-%E6%8F%90%E4%BA%A4%E9%97%AE%E9%A2%98-red?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxNWgydjJoLTJ6bTAtOGgydjZoLTJ6bS45OS01QzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6Ii8%2BPC9zdmc%2B"
          />
        </Link>
        <Link href="https://www.jsdelivr.com/package/npm/bangumi-data">
          <img
            className={styles.badge}
            alt="GitHub package.json version (branch)"
            src="https://img.shields.io/github/package-json/v/bangumi-data/bangumi-data/master?label=bangumi-data&style=flat-square&logo=jsdelivr"
          />
        </Link>
        <Link href="https://github.com/developer-haku/bangumi-ga">
          <img
            className={styles.badge}
            alt="GitHub release (latest by date)"
            src="https://img.shields.io/github/v/release/developer-haku/bangumi-ga?color=orange&label=bangumi-ga&logo=GitHub&style=flat-square"
          />
        </Link>
      </div>
      <Divider />
      <Typography className={styles.paragraph} variant="body1">
        --  本网站，以及本网站源代码已经停止更新 --
        <br />
        这网站是基于bangumi-data作为主要API生成列表，bangumi.tv
        api数据补全信息，使用React.js开发的日本动画番剧导航网站。
        <br />
        因为API基本上都带有Bangumi这词或者与其相关，所以就直接叫作Bangumi了。
        <br />
        这个是我刚学React的第一个个人项目，基本用于练手。我网站设计比较菜，所以大多数都是套用
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/developer-haku/bangumi/issues/new"
        >
          Material-UI
        </Link>
        的组件。
        <br />
      </Typography>
      <Divider />
      <Typography className={styles.header2} variant="h5">
        感谢
      </Typography>
      <Divider />
      <ul className={styles.apiList}>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bangumi-data/bangumi-data"
          >
            bangumi-data
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bangumi/api"
          >
            bangumi.tv api
          </Link>
        </li>
      </ul>
      <Divider />
    </div>
  );
};

export default About;

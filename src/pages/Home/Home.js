import React from "react";
import { Link, Typography } from "@material-ui/core";
import { ArrowBackIosRounded } from "@material-ui/icons";

import Logo from "../../assets/images/logo.png";
import Myne from "../../assets/images/myne_sit.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <Typography className={styles.title} variant="h2" align="center">
        Bangumi
      </Typography>
      <Typography paragraph align="center">
        本网站提供日本动画番剧导航，网站基于
        <Link href="https://github.com/bangumi-data/bangumi-data">
          bangumi-data
        </Link>
        和<Link href="https://github.com/bangumi/api">Bangumi API</Link>
        的数据源生成。
      </Typography>
      <Typography paragraph align="center">
        <ArrowBackIosRounded className={styles.arrowIcon} />
        请活用侧边栏来选择你要查看的资料
      </Typography>
      <Typography paragraph align="center">
        如果网站出现问题或者任何bug。请点击下面图标到GitHub提交问题
      </Typography>
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
            alt="GitHub package.json version (branch)"
            src="https://img.shields.io/github/package-json/v/bangumi-data/bangumi-data/master?label=bangumi-data&style=flat-square&logo=jsdelivr"
          />
        </Link>
      </div>
      <img className={styles.myne} src={Myne} alt="myne" />
    </div>
  );
};

export default Home;

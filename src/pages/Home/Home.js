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
        本网站提供日本动画番剧导航，网站基于多个API的的数据源生成。详细请看
        <Link color="secondary" href="/about">
          关于
        </Link>
        页面。
      </Typography>
      <Typography paragraph align="center">
        <ArrowBackIosRounded className={styles.arrowIcon} />
        请活用侧边栏来选择你要查看的资料。网站的一些使用说明请到
        <Link color="secondary" href="/instruction">
          说明
        </Link>
        页面。
      </Typography>
      <Typography paragraph align="center">
        如果网站出现问题或者任何bug。请点击下面图标到GitHub提交问题
      </Typography>
      <div className={styles.badges}>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/developer-haku/bangumi/issues/new"
        >
          <img
            alt="GitHub Issue"
            src="https://img.shields.io/badge/GitHub-%E6%8F%90%E4%BA%A4%E9%97%AE%E9%A2%98-red?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxNWgydjJoLTJ6bTAtOGgydjZoLTJ6bS45OS01QzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6Ii8%2BPC9zdmc%2B"
          />
        </Link>
      </div>
      <img className={styles.myne} src={Myne} alt="myne" />
    </div>
  );
};

export default Home;

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
        如果你有啥问题或者建议，可以到Github的repo给我提交issue。如果你是强强dalao，想优化一下我的辣鸡代码，也可以直接发Pull
        Request。
        <br />
        这网站开发到我想要的功能都差不多齐全的时候基本上就会减缓开发速度，之后会偶尔优化一下或者修修bug。
        <br />
        主要基本上所有页面都是基于API动态生成，不用经常手动更新也是我的主要开发目的。不过要是API都挂掉的话，这网站也会挂掉的。
      </Typography>
      <Divider />
      <Typography className={styles.header2} variant="h5">
        使用的API
      </Typography>
      <Divider />
      <ul className={styles.apiList}>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/developer-haku/bangumi-ga"
          >
            bangumi-ga
          </Link>
        </li>
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
        <li>
          <Link target="_blank" rel="noreferrer" href="https://netaba.re/">
            netaba.re
          </Link>
        </li>
      </ul>
      <Typography className={styles.paragraph} variant="body1">
        <Typography className={styles.notice} variant="caption">
          netaba.re是我爬出来的API接口。如果给原站主您的服务器造成了压力，请发信息到
          <Link href="mailto:developer.haku@gmail.com">
            developer.haku@gmail.com
          </Link>
          。我会删掉这个API的。
          <span role="img" aria-label="希望API没事" aria-hidden={false}>
            🙏
          </span>
        </Typography>
      </Typography>
      <Divider />
      <Typography className={styles.header2} variant="h5">
        感谢
      </Typography>
      <Divider />
      <Typography className={styles.paragraph} variant="body1">
        感谢所有API接口的创造者和维护者。还有CORS-Anywhere的跨域服务。
      </Typography>
    </div>
  );
};

export default About;

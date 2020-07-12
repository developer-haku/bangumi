import React from "react";
import { Typography, Divider } from "@material-ui/core";

import styles from "./Instruction.module.css";

const Instruction = () => {
  return (
    <div className={styles.inst}>
      <Typography className={styles.header} variant="h4">
        使用说明
      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.paragraph} variant="body1">
        使用其实逛两圈就会用。这里主要是集中设置的说明。
      </Typography>
      <Typography className={styles.header2} variant="h6">
        番剧列表API源说明：
      </Typography>
      <Divider />
      <Typography className={styles.paragraph} variant="body1">
        <strong>Bangumi-GA(我自己爬的数据)：</strong>
        <br />
        优点：访问速度快，不用CORS，墙内能使用
        <br />
        缺点：数据比最新数据差1天
        <br />
        <strong>Bangumi-Subject：</strong>
        <br />
        优点：访问速度快，有番组计划API没有的数据。
        <br />
        缺点：会找不到数据或者数据过旧
        <br />
        <strong>Bangumi API：</strong>
        <br />
        优点：最新
        <br />
        缺点：需要CORS(跨域服务)，默认CORS服务墙内访问不了，需要使用国内的或者自搭。
        <br />
        <strong>Netaba.re：</strong>
        <br />
        优点：数据较新，不用CORS，墙内能使用，访问速度普通
        <br />
        缺点：api并不是开放的，过度使用可能会被原作者禁掉
        <br />
      </Typography>
      <Typography className={styles.header2} variant="h6">
        详细页API源说明：
      </Typography>
      <Divider />
      <Typography className={styles.paragraph} variant="body1">
        API基本同上，Bangumi Subject 混合其他API一起生成番剧详细页的。
        <br />
      </Typography>
      <Typography className={styles.header2} variant="h6">
        CORS代理选择说明：
      </Typography>
      <Divider />
      <Typography className={styles.paragraph} variant="body1">
        <strong>
          默认CORS服务是cors-anywhere作者在heroku上面架的服务器，国内访问不了。
        </strong>
        <br />
        你也可以设置自定义的CORS服务。这样国内也可以使用Bangumi
        API获取最新数据。
        <br />
        <strong>自定义CORS说明：</strong>
        <br />
        1.
        必须是https协议的CORS服务，因为本站时https协议，http的CORS服务用不了。
        <br />
        2.
        CORS服务URL格式(这种格式的基本上都可以用)：corsxxxxxx.com/api.somewebsite.com
      </Typography>
    </div>
  );
};

export default Instruction;

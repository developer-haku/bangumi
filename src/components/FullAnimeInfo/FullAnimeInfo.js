import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";

import styles from "./FullAnimeInfo.module.css";
import InfoSection from "./InfoSection/InfoSection";

const Div = styled.div`
  &::before {
    width: 100%;
    height: 100vh;
    display: block;
    content: "";
    position: fixed;
    background-size: cover;
    background-image: url(${(props) => props.image});
    z-index: -1;
    filter: blur(100px);
  }
`;

const FullAnimeInfo = (props) => {
  const [loading, setLoading] = useState(true);
  const [bangumiInfo, setBangumiInfo] = useState(null);
  const { bgmId } = useParams();

  useEffect(() => {
    if (!bangumiInfo) {
      axios
        .get(
          "http://localhost:56789/https://api.bgm.tv/subject/" +
            bgmId +
            "?responseGroup=large"
        )
        .then((res) => {
          setBangumiInfo(res.data);
          setLoading(false);
        });
    }
  }, [bangumiInfo, bgmId]);

  return loading ? (
    <CircularProgress />
  ) : (
      <Div className={styles.fullInfoPage} image={bangumiInfo.images.large}>
        <InfoSection data={bangumiInfo} />
      </Div>
  );
};

export default FullAnimeInfo;

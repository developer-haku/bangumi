import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

import styles from "./FullAnimeInfo.module.css";
import InfoSection from "./InfoSection/InfoSection";
import AnimeDataService from "../../service/AnimeDataService";

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
    filter: blur(100px) brightness(0.7);
  }
`;

const FullAnimeInfo = (props) => {
  const [loading, setLoading] = useState(true);
  const [bangumiInfo, setBangumiInfo] = useState(null);
  const { bgmId } = useParams();
  const ads = new AnimeDataService();

  useEffect(() => {
    if (!bangumiInfo) {
      ads.getBangumiDataFull(bgmId).then((data) => {
        setBangumiInfo(data);
        setLoading(false);
      });
    }
  }, [ads, bangumiInfo, bgmId]);

  return loading ? (
    <CircularProgress />
  ) : (
    <Div
      className={styles.fullInfoPage}
      image={bangumiInfo.cover}
    >
      <InfoSection data={bangumiInfo} />
    </Div>
  );
};

export default FullAnimeInfo;

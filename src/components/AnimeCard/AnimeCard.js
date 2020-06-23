import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Divider,
  Fade,
  Typography,
  CardMedia,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import {
  MoreVert,
  FavoriteBorder,
  Favorite,
  Home,
  GetApp,
  Info,
  PlayCircleFilled,
} from "@material-ui/icons";

import styles from "./AnimeCard.module.css";
import loadingPlaceHolderImage from "../../assets/images/buka.webp";

const AnimeCard = React.memo((props) => {
  const [bgmApiData, setBgmApiData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const regex = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
  const siteMeta = JSON.parse(localStorage.getItem("bd_site_meta"));

  // 国内可能出问题
  const url =
    "http://localhost:56789/https://api.bgm.tv/subject/" +
    props.bangumiId +
    "?responseGroup=small";
  let dn1 = new Date();
  console.log(
    "-1",
    dn1.getMinutes() + ":" + dn1.getSeconds() + ":" + dn1.getMilliseconds()
  );

  useEffect(() => {
    if (!bgmApiData) {
      let d0 = new Date();
      console.log(
        "0",
        d0.getMinutes() + ":" + d0.getSeconds() + ":" + d0.getMilliseconds()
      );
      axios
        .get(url)
        .then((res) => {
          let d = new Date();
          console.log(
            bgmApiData,
            "????",
            d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds()
          );
          setBgmApiData(res.data);
          console.log(
            bgmApiData,
            "!!!!",
            d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds()
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [bgmApiData, url]);

  let d1 = new Date();
  console.log(
    "1",
    d1.getMinutes() + ":" + d1.getSeconds() + ":" + d1.getMilliseconds()
  );

  const title = !bgmApiData
    ? props.anime.titleTranslate["zh-Hans"]
      ? props.anime.title
      : props.anime.titleTranslate["zh-Hans"]
    : bgmApiData.name_cn === ""
    ? bgmApiData.name
    : bgmApiData.name_cn;
  let d2 = new Date();

  const bangumiRating = !bgmApiData
    ? 0
    : bgmApiData.rating === undefined
    ? 0
    : bgmApiData.rating.score === undefined
    ? 0
    : bgmApiData.rating.score;

  let d3 = new Date();

  let menuItem = props.anime.sites
    .map((site) => {
      return (
        <MenuItem
          key={site.site}
          onClick={() => siteHandler(site.site, site.id)}
        >
          {site.site === "bangumi" ? (
            <Info className={styles.animeMenuIcon} />
          ) : (
            <PlayCircleFilled className={styles.animeMenuIcon} />
          )}
          {siteMeta[site.site].title}
        </MenuItem>
      );
    })
    .sort((a, b) => (a.key === "bangumi" ? 0 : 1));

  menuItem.unshift(
    <MenuItem
      key="official"
      onClick={() => openTargetSite(props.anime.officialSite)}
    >
      <Home className={styles.animeMenuIcon} />
      官方网站
    </MenuItem>
  );
  menuItem.push(
    <MenuItem
      key="dmhy"
      onClick={() =>
        openTargetSite(
          siteMeta.dmhy.urlTemplate.replace("{{id}}", title.replace(regex, ""))
        )
      }
    >
      <GetApp className={styles.animeMenuIcon} />
      动漫花园
    </MenuItem>
  );

  const openTargetSite = (url) => {
    window.open(url, "_black");
  };

  const siteHandler = (site, id) => {
    window.open(siteMeta[site].urlTemplate.replace("{{id}}", id), "_black");
  };

  const menuOpenHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const menuCloseHandler = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Card className={styles.card}>
        <CardMedia
          className={styles.coverImage}
          image={
            !bgmApiData ? loadingPlaceHolderImage : bgmApiData.images.large
          }
          title={title}
        />
        <CardContent className={styles.cardContent}>
          <Typography variant="subtitle2" className={styles.title}>
            {title}
          </Typography>
        </CardContent>
        <CardContent className={styles.rating}>
          <Rating
            name="bangumi-rating"
            size="small"
            defaultValue={0}
            value={bangumiRating / 2}
            precision={0.1}
            disabled={bangumiRating ? false : true}
            readOnly
          />
          <Box className={styles.ratingNum}>
            {bangumiRating ? bangumiRating : ""}
          </Box>
        </CardContent>
        <Divider />
        <CardActions className={styles.cardActions}>
          <IconButton className={styles.favIcon} size="small">
            <FavoriteBorder />
          </IconButton>
          <IconButton
            className={styles.moreIcon}
            size="small"
            onClick={menuOpenHandler}
          >
            <MoreVert />
          </IconButton>
        </CardActions>
      </Card>
      <Menu
        className={styles.animeMenu}
        id="simple-menu"
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={menuCloseHandler}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {menuItem}
      </Menu>
    </React.Fragment>
  );
});

export default AnimeCard;

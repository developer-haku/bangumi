import React, { useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";

import styles from "./AnimeCard.module.css";
import NoCoverPlaceholderImage from "../../assets/images/nocover.jpg";
import loadingPlaceHolderImage from "../../assets/images/loading.svg";
import AnimeDataService from "../../service/AnimeDataService";

const AnimeCard = React.memo((props) => {
  const [animeData, setAnimeData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const siteMeta = JSON.parse(localStorage.getItem("bd_site_meta"));
  const ads = new AnimeDataService();

  useEffect(() => {
    if (!animeData) {
      ads.getBangumiDataBasic(props.bangumiId).then((data) => {
        setAnimeData(data);
      });
    }
  }, [ads, animeData, props.bangumiId]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favorite"));
    if (favList.includes(props.bangumiId)) setIsFav(true);
  }, [props.bangumiId]);

  const title = props.anime.titleTranslate["zh-Hans"]
    ? props.anime.titleTranslate["zh-Hans"]
    : animeData
    ? animeData.nameCn
      ? animeData.nameCn
      : animeData.name
    : props.anime.title;

  const bangumiRating = !animeData ? 0 : animeData.score;

  let menuItem = props.anime.sites
    .map((site) => {
      return (
        <MenuItem
          key={site.site}
          className={styles.menuItem}
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
      className={styles.menuItem}
      onClick={() => openTargetSite(props.anime.officialSite)}
    >
      <Home className={styles.animeMenuIcon} />
      官方网站
    </MenuItem>
  );
  menuItem.push(
    <MenuItem
      key="dmhy"
      className={styles.menuItem}
      onClick={() =>
        openTargetSite(siteMeta.dmhy.urlTemplate.replace("{{id}}", title))
      }
    >
      <GetApp className={styles.animeMenuIcon} />
      动漫花园
    </MenuItem>
  );

  const openTargetSite = (url) => {
    window.open(url);
  };

  const siteHandler = (site, id) => {
    window.open(siteMeta[site].urlTemplate.replace("{{id}}", id));
  };

  const menuOpenHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const menuCloseHandler = () => {
    setAnchorEl(null);
  };

  const fav = () => {
    let favList = JSON.parse(localStorage.getItem("favorite"));
    if (favList.includes(props.bangumiId)) {
      favList.splice(favList.indexOf(props.bangumiId), 1);
    } else {
      favList.push(props.bangumiId);
    }
    localStorage.setItem("favorite", JSON.stringify(favList));
    setIsFav(!isFav);
  };

  const goFullInfoPage = () => {
    history.push("/bangumi/" + props.bangumiId);
  };

  return (
    <React.Fragment>
      <Card className={styles.card}>
        <CardMedia
          className={styles.coverImage}
          image={
            animeData
              ? animeData.image
                ? animeData.image
                : NoCoverPlaceholderImage
              : loadingPlaceHolderImage
          }
          title={title}
          onClick={goFullInfoPage}
        />
        <CardContent className={styles.cardContent}>
          <Typography
            variant={isMobile ? "caption" : "subtitle2"}
            className={styles.title}
            onClick={goFullInfoPage}
          >
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
          <IconButton className={styles.favBtn} size="small" onClick={fav}>
            {isFav ? <Favorite className={styles.favIcon} /> : <FavoriteBorder className={styles.favIcon} />}
          </IconButton>
          <IconButton
            className={styles.moreBtn}
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

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Menu,
  MenuItem,
  IconButton,
  Fade,
} from "@material-ui/core";
import {
  GetApp,
  Home,
  Info,
  PlayCircleFilled,
  Favorite,
  FavoriteBorder,
  MoreHoriz,
} from "@material-ui/icons";

import AnimeDataService from "../../service/AnimeDataService";
import styles from "./AnimeMiniCard.module.css";
import NoCoverPlaceholderImage from "../../assets/images/nocover.jpg";
import { useHistory } from "react-router-dom";

const AnimeMiniCard = (props) => {
  const [animeData, setAnimeData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const ads = new AnimeDataService();
  const siteMeta = JSON.parse(localStorage.getItem("bd_site_meta"));
  const bangumiId = props.anime.sites.find((i) => i.site === "bangumi").id;

  useEffect(() => {
    if (!animeData)
      ads.getBangumiDataBasic(bangumiId).then((data) => {
        setAnimeData(data);
      });
  }, [ads, animeData, bangumiId]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favorite"));
    if (favList.includes(bangumiId)) setIsFav(true);
  }, [bangumiId]);

  const title = props.anime.titleTranslate["zh-Hans"]
    ? props.anime.titleTranslate["zh-Hans"]
    : animeData
    ? animeData.nameCn
      ? animeData.nameCn
      : animeData.name
    : props.anime.title;

  const bangumiRating = !animeData ? 0 : animeData.score === 0 ? "X" : animeData.score;

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
    if (favList.includes(bangumiId)) {
      favList.splice(favList.indexOf(bangumiId), 1);
    } else {
      favList.push(bangumiId);
    }
    localStorage.setItem("favorite", JSON.stringify(favList));
    setIsFav(!isFav);
  };

  const goFullInfoPage = () => {
    history.push("/bangumi/" + bangumiId);
  };

  return (
    <React.Fragment>
      <Card variant="outlined" className={styles.card}>
        <CardMedia
          className={styles.coverImage}
          component="div"
          image={
            animeData
              ? animeData.image !== ""
                ? animeData.image
                : NoCoverPlaceholderImage
              : NoCoverPlaceholderImage
          }
          onClick={goFullInfoPage}
        />
        <Typography className={styles.rating} variant="caption">{bangumiRating}</Typography>
        <CardContent className={styles.content}>
          <Typography
            className={styles.title}
            variant="caption"
            onClick={goFullInfoPage}
          >
            {title}
          </Typography>
          <CardActions className={styles.actions}>
            <IconButton className={styles.favBtn} size="small" onClick={fav}>
              {isFav ? <Favorite className={styles.favIcon} /> : <FavoriteBorder className={styles.favIcon} />}
            </IconButton>
            <IconButton
              className={styles.moreBtn}
              size="small"
              onClick={menuOpenHandler}
            >
              <MoreHoriz />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
      <Menu
        elevation={1}
        className={styles.animeMenu}
        id="simple-menu"
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={menuCloseHandler}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuItem}
      </Menu>
    </React.Fragment>
  );
};

export default AnimeMiniCard;

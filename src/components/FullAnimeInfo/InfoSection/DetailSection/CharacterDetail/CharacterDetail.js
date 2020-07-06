import React from "react";
import { Typography, Divider } from "@material-ui/core";

import styles from "./CharacterDetail.module.css";
import CharacterCard from "./CharacterCard/CharacterCard";

const CharacterDetail = (props) => {
  return (
    <div className={styles.characterDetail}>
      <Typography variant="body1" className={styles.header}>
        角色列表 <Typography variant="caption">(点击角色图片可查看声优照片)</Typography>
      </Typography>
      <Divider className={styles.divider} />
      <div className={styles.characterList} >
        {props.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterDetail;

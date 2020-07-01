import React from "react";
import { Typography, Divider } from "@material-ui/core";

import styles from "./CharacterDetail.module.css";
import CharacterCard from "./CharacterCard/CharacterCard";

const CharacterDetail = (props) => {
  return (
    <div>
      <Typography variant="body1" className={styles.header}>角色列表</Typography>
      <Divider />
      {props.characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterDetail;

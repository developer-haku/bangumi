import React, { useState } from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";

import styles from "./CharacterCard.module.css";
import ProfilePlaceholderImage from "../../../../../../assets/images/profile_placeholder.png";
import CharacterPlaceholderImage from "../../../../../../assets/images/CharacterPlaceholder.jpg";

const CharacterCard = (props) => {
  const characterImage = props.character.images
    ? props.character.images.large
    : CharacterPlaceholderImage;
  const [cardImage, setCardImage] = useState(characterImage);

  const swapImage = () => {
    if (cardImage === characterImage) {
      setCardImage(
        props.character.actors && props.character.actors[0].images
          ? props.character.actors[0].images.large
          : ProfilePlaceholderImage
      );
    } else {
      setCardImage(characterImage);
    }
  };

  let info = [];
  if (props.character.info) {
    props.character.info.gender &&
      info.push(
        <Typography key="gender" variant="body2">
          {"性别：" + props.character.info.gender}
        </Typography>
      );
    props.character.info.birth &&
      info.push(
        <Typography key="birth" variant="body2">
          {"生日：" + props.character.info.birth}
        </Typography>
      );
    props.character.info.height &&
      info.push(
        <Typography key="height" variant="body2">
          {"身高：" + props.character.info.height}
        </Typography>
      );
    props.character.info.bloodtype &&
      info.push(
        <Typography key="bloodtype" variant="body2">
          {"血型：" + props.character.info.bloodtype}
        </Typography>
      );
    props.character.info.bwh &&
      info.push(
        <Typography key="bwh" variant="body2">
          {"三围：" + props.character.info.bwh}
        </Typography>
      );
  }

  return (
    <Card className={styles.characterCard}>
      <CardMedia
        className={styles.characterImage}
        image={cardImage}
        onClick={swapImage}
      />
      <div className={styles.charaInfo}>
        <Typography variant="caption" className={styles.role}>
          {props.character["role_name"]}
        </Typography>
        <Typography className={styles.actors} variant="caption">
          {props.character.actors
            ? "CV: " + props.character.actors[0].name
            : ""}
        </Typography>
        <Typography variant="body1">{props.character.name}</Typography>
        {props.character.info &&
          props.character.info.alias &&
          props.character.info.alias.kana && (
            <Typography variant="body2">
              {"假名：" + props.character.info.alias.kana}
            </Typography>
          )}
        {props.character["name_cn"] === "" ? null : (
          <Typography variant="body2">
            {"中文名：" + props.character["name_cn"]}
          </Typography>
        )}
        {info}
      </div>
    </Card>
  );
};

export default CharacterCard;

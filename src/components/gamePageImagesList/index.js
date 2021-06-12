import React from "react";
import styles from "./styles.module.scss";

import { NoImageComponent } from "../noImageComponent";

import GameImage1 from "../../img/game-image-1.png";
import GameImage3 from "../../img/game-image-3.png";

export function GamePageImagesList() {
  return (
    <div className={styles.container}>
      <h1>Imagens</h1>
      <div className={styles.imagesListContainer}>
        <img src={GameImage1} alt="Imagem 1"/>
        <NoImageComponent />
        <img src={GameImage3} alt="Imagem 3"/>
      </div>
    </div>
  );
}
import React from "react";
import gameCover from "../../img/it-takes-two-capa.png";
import styles from "./styles.module.scss";
import moment from "moment";
import 'moment/locale/pt-br';

import Goty from "../../img/GOTY.png";
import Joty from "../../img/JOTY.png";

export function GamePageBanner({
  gameImage = gameCover,
  gameName = "It takes two",
  jeffScore = 9.9,
  jeffPrice = 200,
  chatScore = 9.8,
  chatPrice = 165,
  releaseDate = 1616727600000,
  platforms = [
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series X",
    "Xbox Series S",
    "PC",
  ],
  hasGoty = true,
  hasJoty = true,
}) {
  moment.locale("pt-br");
  return (
    <div className={styles.container}>
      <div className={styles.gameCoverContainer}>
        <img src={gameImage} alt={`Capa de ${gameName}`} className={styles.gameCoverImage}/>
        <div className={styles.awardsContainer}>
          {
            hasGoty
            ? <img src={Goty} alt="" />
            : null
          }
          {
            hasJoty
            ? <img src={Joty} alt="" />
            : null
          }
        </div>
      </div>
      <div className={styles.gameInfo}>
        <div className={styles.gameInfoDescription}>
          <h1>{gameName}</h1>
          <p><strong>PLATAFORMAS: </strong>{platforms.join(", ")}</p>
          <p><strong>LANÇAMENTO: </strong>{moment(releaseDate).locale("pt-br").format('LL')}</p>
        </div>
        <div className={styles.jeffContainer}>
          <div className={styles.jeffScore}>
            <p className={styles.title}>Nota do JeFFF:</p>
            <p className={styles.score}>{jeffScore}</p>
          </div>
          <div className={styles.gamePrice}>
            <p className={styles.title}>Quanto vale?</p>
            <div className={styles.priceContainer}>
              <p className={styles.moneySign}>
                R$
              </p>
              <p className={styles.priceValue}>
                {jeffPrice}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chatScore}>
            <p className={styles.title}>Nota do Chat:</p>
            <p className={styles.score}>{chatScore}</p>
          </div>
          <div className={styles.gamePrice}>
            <p className={styles.title}>Preço do Chat:</p>
            <div className={styles.priceContainer}>
              <p className={styles.moneySign}>
                R$
              </p>
              <p className={styles.priceValue}>
                {chatPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
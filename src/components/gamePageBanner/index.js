import React from "react";
import gameCover from "../../img/it-takes-two-capa.png";
import styles from "./styles.module.scss";
import moment from "moment";
import 'moment/locale/pt-br';

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
}) {
  moment.locale("pt-br");
  return (
    <div className={styles.container}>
      <img src={gameImage} alt={`Capa de ${gameName}`} />
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
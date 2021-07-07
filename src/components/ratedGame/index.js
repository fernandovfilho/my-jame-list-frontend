import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { ModalComment } from "../modalComment";

import styles from "./styles.module.scss";

export function RatedGame({
  title,
  day,
  month,
  year,
  average,
  price,
  description,
}) {
  const [date, setDate] = useState();

  const [isVisible, setIsVisible] = useState(false);

  function handleModal() {
    setIsVisible(!isVisible);
  }

  description =
    "O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.";

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => handleModal()} className={styles.groupIcon}>
          {isVisible ? (
            <FaFileAlt size={32} color="#FEF769" />
          ) : (
            <FaFileAlt size={32} color="#FFF" />
          )}
        </button>

        <div className={styles.game}>
          <p className={styles.gameTitle}>{title}</p>
          {date ? (
            <p className={styles.gameDate}>
              {day} de{" "}
              <strong>
                {month} de {year}
              </strong>
            </p>
          ) : (
            <div />
          )}
        </div>

        <div className={styles.groupInfo}>
          <div className={styles.divider} />

          <div className={styles.groupAverage}>
            <p className={styles.labelAverage}>Nota:</p>
            <p className={styles.price}>{average}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.groupPrice}>
            <p className={styles.labelPrice}>Quanto vale?:</p>
            <div>
              <p>R$</p>
              <p className={styles.price}>{price}</p>
            </div>
          </div>
        </div>
      </div>
      {isVisible ? <ModalComment comment={description} /> : null}
    </>
  );
}

import React from "react";
import { ReportButton } from "../reportButton";
import styles from "./styles.module.scss";
import eye from "../../img/eye-icon.svg";

export function ChatRatedGame({
  author,
  comment,
  score,
  price,
  isCommentVisible,
}) {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.authorContainer}>
          <p className={styles.by}>POR:</p>
          <p className={styles.authorName}>{author}</p>
        </div>
        <ReportButton
          onClick={() => {}}
        />
      </div>
      <div className={styles.commentCard}>
        <div className={styles.commentContainer}>
          {
            isCommentVisible
            ? <p>{comment}</p>
            : <img src={eye} alt="Comentário Oculto"/>
          }
        </div>
        <div className={styles.divider}/>
        <div className={styles.scoreAndPriceContainer}>
          <div className={styles.scoreContainer}>
            <p className={styles.scoreTitle}>
              Nota:
            </p>
            <p className={styles.scoreValue}>
              {score}
            </p>
          </div>
          <div className={styles.divider}/>
          <div className={styles.priceContainer}>
            <p className={styles.priceTitle}>
              Quanto vale?
            </p>
            <div className={styles.priceValueContainer}>
              <p className={styles.moneySign}>
                R$
              </p>
              <p className={styles.priceValue}>
                {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
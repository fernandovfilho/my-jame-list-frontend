import React from "react";
import { CardGame } from "../../components/CardGame";
import { HomeBanner } from "../../components/homeBanner";
// import "./style.module.scss";

import styles from './style.module.scss'

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <div className={styles.homePage}>
      <section className={styles.main}>
        <div className={styles.gameOfTheYear}>
          <p>
            O <strong>JOGO DO ANO</strong>
          </p>
          <div>
            <CardGame />
          </div>
        </div>
        <div className={styles.gameInGroup}>
          <p>
            JOGOS <strong>RECENTES</strong>
          </p>
          <div className={styles.games}>
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

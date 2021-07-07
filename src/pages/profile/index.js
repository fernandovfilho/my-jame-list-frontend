import { useState } from "react";
import { RatedGame } from "../../components/ratedGame";
import { StreamerProfile } from "../../components/StreamerProfile";

import styles from "./styles.module.scss";

export function Profile() {
  const [bestRatedGames, setBetRatedGames] = useState([
    {
      title: "Read Dead Redemption 2",
      average: "9.8",
      price: "100",
      description: "",
    },
    {
      title: "Fall guys",
      average: "10",
      price: "30",
      description: "",
    },
    {
      title: "Returnal",
      average: "8",
      price: "100",
      description: "",
    },
  ]);

  const [myRatingGames, setMyRatingGames] = useState([
    {
      title: "Read Dead Redemption 2",
      day: "26",
      month: "outubro",
      year: "2018",
      average: "9.8",
      price: "100",
      description: "",
    },
    {
      title: "Fall guys",
      day: "04",
      month: "agosto",
      year: "2020",
      average: "10",
      price: "30",
      description: "",
    },
    {
      title: "Returnal",
      day: "30",
      month: "abril",
      year: "2021",
      average: "8",
      price: "100",
      description: "",
    },
  ]);

  return (
    <div className={styles.container}>
      <StreamerProfile />

      <section className={styles.myBestGames}>
        <p className={styles.title}>
          MEUS <strong>JOGOS FAVORITOS DE TODOS OS TEMPOS</strong>
        </p>
        <div className={styles.games}>
          {/* Add Component CardGame - PullRequest #9 */}
        </div>
      </section>

      <section className={styles.ratedGames}>
        <div className={styles.gameOfTheYear}>
          <p className={styles.title}>
            MEU <strong>JOGO DO ANO</strong>
          </p>
          <div className={styles.cardGameOfTheYear}>
            {/* Add Component CardGame - PullRequest #9 */}
          </div>
        </div>

        <div className={styles.bestGames}>
          <p className={styles.title}>
            <strong>OS MELHORES</strong> AVALIADOS
          </p>

          <div className={styles.cardRatedGame}>
            {bestRatedGames.map((bestRatedGame) => {
              return (
                <RatedGame
                  title={bestRatedGame.title}
                  day={bestRatedGame.day}
                  month={bestRatedGame.month}
                  year={bestRatedGame.year}
                  average={bestRatedGame.average}
                  price={bestRatedGame.price}
                  description={bestRatedGame.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.myRatedGames}>
        <div className={styles.myRatedGamesSearch}>
          <p className={styles.title}>
            MINHAS<strong> AVALIAÇÕES</strong>
          </p>

          <input type="text" />

          <div className={styles.selectedFilter}>
            <p className={styles.selectLabel}>Organizar por:</p>
            <select>
              <option value="">Mais recente</option>
              <option value="">Menores Preço</option>
              <option value="">Menores Notas</option>
            </select>
          </div>
        </div>

        <div className={styles.cardRatedGame}>
          {myRatingGames.map((myRatedGame) => {
            return (
              <RatedGame
                title={myRatedGame.title}
                day={myRatedGame.day}
                month={myRatedGame.month}
                year={myRatedGame.year}
                average={myRatedGame.average}
                price={myRatedGame.price}
                description={myRatedGame.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

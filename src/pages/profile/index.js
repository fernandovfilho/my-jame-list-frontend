import { StreamerProfile } from "../../components/StreamerProfile";

import styles from "./styles.module.scss";

export function Profile() {
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
          <div>{/* Add Component CardGame - PullRequest #9 */}</div>
        </div>

        <div className={styles.bestGames}>
          <p className={styles.title}>
            <strong>OS MELHORES</strong> AVALIADOS
          </p>

          <div>{/* Add Component RatedGame - Issues #11 */}</div>
        </div>
      </section>

      <section className={styles.myRatedGames}>
        <div className={styles.myRatedGamesSearch}>
          <p className={styles.title}>
            MINHAS<strong> AVALIAÇÕES</strong>
          </p>
          <input type="text" />
          <p className={styles.selectLabel}>Organizar por:</p>
          <select>
            <option value="">Mais recente</option>
            <option value="">Menores Preço</option>
            <option value="">Menores Notas</option>
          </select>
        </div>

        <div>{/* Add Component RatedGame - Issues #11 */}</div>
      </section>
    </div>
  );
}

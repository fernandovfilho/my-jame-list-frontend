import styles from "./styles.module.scss";
import game from '../../assets/games/returnal.jpg'

export function CardGame() {
  return (
    <div className={styles.container}>
      <a href="/">
        <img src={game} alt="Imagem jogo" />
      </a>
    </div>
  );
}

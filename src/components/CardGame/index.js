import styles from "./styles.module.scss";
import game from '../../assets/games/returnal.jpg'

export function CardGame({titleGame, linkGame, imageGame = game}) {
  return (
    <div className={styles.container}>
      <a href={linkGame}>
        <img src={imageGame} alt={titleGame} />
      </a>
    </div>
  );
}

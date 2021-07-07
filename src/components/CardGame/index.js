import styles from "./styles.module.scss";
import game from '../../assets/games/returnal.jpg'

export function CardGame({title, link, image = game}) {
  return (
    <div className={styles.container}>
      <a href={link}>
        <img src={image} alt={title} />
      </a>
    </div>
  );
}

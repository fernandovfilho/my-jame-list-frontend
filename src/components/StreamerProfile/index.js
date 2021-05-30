import picProfile from "../../assets/jeffprofile.png";

import styles from "./styles.module.scss";

export function StreamerProfile({
  image = picProfile,
  name = "JeFFF",
  channel = "twitch.tv/JeFFF",
  bio = `Olá, sou um streamer de jogos variados. Cheguei a jogar
competitivamente alguns games (cod, hearthstone e pubg), mas hoje em
dia prefiro focar em me divertir e levar um pouco de entretenimento e
conversas legais para a minha audiência. :] | contato@jefff.live`,
}) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <a href={"https://" + channel} className={styles.channel}>
          {channel}
        </a>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}

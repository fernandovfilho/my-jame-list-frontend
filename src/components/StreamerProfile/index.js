import picProfile from "../../assets/jeffprofile.png";
import { FaTwitch } from "react-icons/fa";

import styles from "./styles.module.scss";
import { useState } from "react";

export function StreamerProfile() {
  const [profile, setProfile] = useState({
    image: picProfile,
    name: "JeFFF",
    channel: "twitch.tv/JeFFF",
    bio: `Olá, sou um streamer de jogos variados. Cheguei a jogar
  competitivamente alguns games (cod, hearthstone e pubg), mas hoje em
  dia prefiro focar em me divertir e levar um pouco de entretenimento e
  conversas legais para a minha audiência. :] | contato@jefff.live`,
  });

  return (
    <div className={styles.container}>
      <img src={profile.image} alt={profile.name} />
      <div className={styles.info}>
        <p className={styles.name}>{profile.name}</p>
        <div className={styles.groupChannel}>
          <FaTwitch size={34} color="#FFF" style={{ marginRight: "10px" }} />
          <a href={"https://" + profile.channel} className={styles.channel}>
            {profile.channel}
          </a>
        </div>
        <p className={styles.bio}>{profile.bio}</p>
      </div>
    </div>
  );
}

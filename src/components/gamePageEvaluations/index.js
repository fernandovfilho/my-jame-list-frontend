import React from "react";
import { useState } from "react";
import { AvoidSpoilerButton } from "../avoidSpoilersButton";
import { ChatRatedGame } from "../chatRatedGame";
import styles from "./styles.module.scss";

export function GamePageEvaluations() {

  const [isAvoidingSpoilers, setIsAvoidingSpoilers] = useState(true);
  const [evaluations, _] = useState([
    {
      author: "RodinhoDePia10",
      comment: "O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.",
      score: 10,
      price: 200,
    },
    {
      author: "ZIM_22",
      comment: "O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.",
      score: 9.7,
      price: 350,
    },
    {
      author: "Garnigo_BOT",
      comment: "O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.",
      score: 8.8,
      price: 160,
    },
  ])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Avaliações</h1>
          <AvoidSpoilerButton
            avoiding={isAvoidingSpoilers}
            onClick={() => setIsAvoidingSpoilers(!isAvoidingSpoilers)}
          />
        </div>
        <div className={styles.filterContainer}>
          <p className={styles.selectLabel}>Organizar por:</p>
          <select>
            <option value="">Maiores Notas ▼</option>
            <option value="">Menores Notas ▲</option>
            <option value="">Menores Preços ▲</option>
            <option value="">Maiores Preços ▼</option>
          </select>
        </div>
      </div>
      {
        evaluations.map((evaluation) => (
          <div className={styles.chatRatedGameMargin}>
            <ChatRatedGame
              author={evaluation.author}
              comment={evaluation.comment}
              score={evaluation.score}
              price={evaluation.price}
              isCommentVisible={isAvoidingSpoilers}
            />
          </div>
        ))
      }
    </div>
  );
}
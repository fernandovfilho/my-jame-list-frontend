import React from "react";
import { GamePageBanner } from "../../components/gamePageBanner";
import { GamePageImagesList } from "../../components/gamePageImagesList";
import { GamePageEvaluations } from "../../components/gamePageEvaluations";
import styles from "./styles.module.scss";

export function GamePage() {
  return (
    <div className={styles.container}>
      <GamePageBanner/>
      <GamePageImagesList/>
      <GamePageEvaluations/>
    </div>
  );
}
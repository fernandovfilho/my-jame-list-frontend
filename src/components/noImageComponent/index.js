import React from "react";
import styles from "./styles.module.scss";

export function NoImageComponent() {
  return (
    <div className={styles.noImageContainer}>
      <h1>SEM IMAGEM</h1>
      <p>DISPONÍVEL</p>
    </div>
  );
}
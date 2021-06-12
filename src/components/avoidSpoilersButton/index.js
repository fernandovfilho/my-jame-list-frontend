import React from "react";
import "./styles.module.scss";
import eye from "../../img/eye-icon.svg";

export function AvoidSpoilerButton({
  avoiding,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
    >
      <img src={eye} alt="Evitar Spoilers"/>
      <p>{avoiding ? `MOSTRAR COMENTÁRIOS` : `EVITAR SPOILERS`}</p>
    </button>
  );
}
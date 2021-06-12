import React from "react";
import "./styles.module.scss";
import report from "../../img/report-icon.svg";

export function ReportButton({
  onClick,
}) {
  return (
    <button
      onClick={onClick}
    >
      <img src={report} alt="Reportar"/>
      <p>Reportar</p>
    </button>
  );
}
import React from "react";
import { HomeBanner } from "../../components/homeBanner";
import "./style.scss";

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <div className="home-page"></div>
    </>
  );
}

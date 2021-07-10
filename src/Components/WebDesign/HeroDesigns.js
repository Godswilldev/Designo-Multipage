import React from "react";
import circles from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";
import { HeroDesign } from "./HeroDesignsStyles";
const HeroDesigns = ({ title, paragraph }) => {
  return (
    <HeroDesign>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <div className="circle">
        <img src={circles} alt="bg-pattern-intro-web" />
      </div>
    </HeroDesign>
  );
};

export default HeroDesigns;

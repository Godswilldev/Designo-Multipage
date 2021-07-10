import React from "react";
import Buttons from "../Button/Button";
import heroIllustration from "../../assets/home/desktop/image-hero-phone.png";
import heroCircle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import { Hero } from "./HeroHomeStyles";
const HeroHome = () => {
  return (
    <Hero>
      <div className="circles">
        <img src={heroCircle} alt="hero circle" />
      </div>
      <div className="heroText">
        <h1>
          Award-winning custom <br /> designs and digital <br /> branding
          solutions
        </h1>
        <p>
          With over 10 years in the industry, we are experienced in <br />
          creating fully responsive websites, app design, and engaging <br />
          brand experiences. Find out more about our services.
        </p>
        <Buttons col="onDark" text="Learn more" />
      </div>
      <div className="heroImg">
        <img src={heroIllustration} alt="illustration icon" />
      </div>
    </Hero>
  );
};

export default HeroHome;

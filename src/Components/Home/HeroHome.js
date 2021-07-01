import React from "react";
import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import Buttons from "../Button/Button";
import heroIllustration from "../../assets/home/desktop/image-hero-phone.png";
import heroCircle from "../../assets/home/desktop/bg-pattern-hero-home.svg";

const Hero = styled.div`
  margin-top: 5rem;
  height: 64rem;
  width: 100%;
  background-color: ${variables.primaryColors.peach};
  border-radius: 1rem;
  color: ${variables.primaryColors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;

  .heroText {
    padding-left: 5rem;
    h1 {
      line-height: 1.2;
      font-weight: 500;
    }
    & > * {
      margin: 3rem 0;
    }
  }

  .heroImg {
    margin-top: 20rem;
    margin-right: -7rem;
  }

  .circles {
    position: absolute;
    right: 0;
  }
`;

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
          With over 10 years in the industry, we are experienced in <br />{" "}
          creating fully responsive websites, app design, and engaging <br />{" "}
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

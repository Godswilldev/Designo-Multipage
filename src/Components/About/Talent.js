import React from "react";
import styled from "styled-components";
import aboutImg from "../../assets/about/desktop/image-about-hero.jpg";
import bg_pattern from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import * as variables from "../../Helpers/Variables";

const About = styled.div`
  margin-top: 5rem;
  color: ${variables.primaryColors.white};

  .about__header {
    display: grid;
    grid-template-columns: 60% 1fr;
    height: 48rem;
    border-radius: 1rem;
    overflow: hidden;

    &--text {
      padding: 0 8rem;
      position: relative;
      background-color: ${variables.primaryColors.peach};
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;

      h1 {
        margin-bottom: 3rem;
      }

      img {
        position: absolute;
        height: 100%;
      }
    }
    &--img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Talent = () => {
  return (
    <About>
      <div className="about__header">
        <div className="about__header--text">
          <h1>About us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
          <img src={bg_pattern} alt="bg pattern" />
        </div>
        <div className="about__header--img">
          <img src={aboutImg} alt="About imag" />
        </div>
      </div>
    </About>
  );
};

export default Talent;

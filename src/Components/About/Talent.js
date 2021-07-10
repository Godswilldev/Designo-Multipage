import React from "react";
import aboutImg from "../../assets/about/desktop/image-about-hero.jpg";
import bg_pattern from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import { About } from "./TalentStyles";

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

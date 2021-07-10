import React from "react";
import aboutImg from "../../assets/about/desktop/image-about-hero.jpg";
import talent from "../../assets/about/desktop/image-world-class-talent.jpg";
import real_deal from "../../assets/about/desktop/image-real-deal.jpg";
import bg_pattern from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import two_circles from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import Country from "../Location/Country";
import { About } from "./AboutStyles";

const AboutUs = () => {
  return (
    <About>
      <div className="about about__header">
        <div className="styledtext about__header--text">
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
        <div className="styledImg about__header--img">
          <img src={aboutImg} alt="About imag" />
        </div>
      </div>

      <div className="about about__talent">
        <div className="styledImg about__talent--img">
          <img src={talent} alt="world class talent img" />
        </div>
        <div className="styledtext about__talent--text">
          <h1>World-class talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
          <img src={two_circles} alt="bg pattern" />
        </div>
      </div>

      <div className="locations">
        <Country />
      </div>

      <div className="about about__company">
        <div className="styledtext about__company--text">
          <h1>The Real Deal</h1>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. We are visual
            storytellers in appealing and captivating ways. By combining
            business and marketing strategies, we inspire audiences to take
            action and drive real results.
          </p>
          <img src={two_circles} alt="bg pattern" />
        </div>

        <div className="styledImg about__company--img">
          <img src={real_deal} alt="real deal img" />
        </div>
      </div>
    </About>
  );
};

export default AboutUs;

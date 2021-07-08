import React from "react";
import HeroDesigns from "../WebDesign/HeroDesigns";
import DesignFeatures from "../WebDesign/DesignFeatures";
import DesignTypes from "../WebDesign/DesignTypes";
import airFilter from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../../assets/app-design/desktop/image-faceit.jpg";
import todo from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg";
import web from "../../assets/home/desktop/image-web-design-large.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import { Web } from "../WebDesign/WebDesign";
import { Link } from "react-router-dom";
const AppDesign = () => {
  return (
    <Web>
      <HeroDesigns
        title="App design"
        paragraph="Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips."
      />

      <div className="designFeatures">
        <DesignFeatures
          img={airFilter}
          title="AIRFILTER"
          paragraphText="Solving the problem of poor indoor air quality by filtering the air"
        />
        <DesignFeatures
          img={eyecam}
          title="eyecam"
          paragraphText="Product that lets you edit your favorite photos and videos at any time"
        />
        <DesignFeatures
          img={faceit}
          title="faceit"
          paragraphText="Get to meet your favorite internet superstar with the faceit app"
        />
        <DesignFeatures
          img={todo}
          title="todo"
          paragraphText="A todo app that features cloud sync with light and dark mode"
        />
        <DesignFeatures
          img={loopstudios}
          title="loopstudios"
          paragraphText="A VR experience app made for Loopstudios"
        />
      </div>
      <div className="designs">
        <Link to="/web">
          {" "}
          <DesignTypes
            img={web}
            title="web design"
            paragraphText="view project"
          />
        </Link>

        <Link to="/graphics">
          {" "}
          <DesignTypes
            img={graphic}
            title="graphic design"
            paragraphText="view project"
          />
        </Link>
      </div>
    </Web>
  );
};

export default AppDesign;

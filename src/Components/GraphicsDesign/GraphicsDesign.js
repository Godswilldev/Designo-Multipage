import React from "react";
import HeroDesigns from "../WebDesign/HeroDesigns";
import { Web } from "../WebDesign/WebDesign";
import DesignFeatures from "../WebDesign/DesignFeatures";
import DesignTypes from "../WebDesign/DesignTypes";
import science from "../../assets/graphic-design/desktop/image-science.jpg";
import change from "../../assets/graphic-design/desktop/image-change.jpg";
import boxed_water from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import web from "../../assets/home/desktop/image-web-design-large.jpg";
import app from "../../assets/home/desktop/image-app-design.jpg";
const GraphicsDesign = () => {
  return (
    <Web>
      <HeroDesigns
        title="Graphic Design"
        paragraph="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div className="designFeatures">
        <DesignFeatures
          img={change}
          title="tim brown"
          paragraphText="A book cover designed for Tim Brown’s new release, ‘Change’"
        />
        <DesignFeatures
          img={boxed_water}
          title="boxed water"
          paragraphText="A simple packaging concept made for Boxed Water"
        />
        <DesignFeatures
          img={science}
          title="science"
          paragraphText="A poster made in collaboration with the Federal Art Project"
        />
      </div>
      <div className="designs">
        <DesignTypes
          img={app}
          title="app design"
          paragraphText="view project"
        />
        <DesignTypes
          img={web}
          title="web design"
          paragraphText="view project"
        />
      </div>
    </Web>
  );
};

export default GraphicsDesign;

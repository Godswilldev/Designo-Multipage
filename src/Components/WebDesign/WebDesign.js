import React from "react";
import DesignFeatures from "./DesignFeatures";
import HeroDesigns from "./HeroDesigns";
import transfer from "../../assets/web-design/desktop/image-transfer.jpg";
import camp from "../../assets/web-design/desktop/image-camp.jpg";
import express from "../../assets/web-design/desktop/image-express.jpg";
import photon from "../../assets/web-design/desktop/image-photon.jpg";
import blogr from "../../assets/web-design/desktop/image-blogr.jpg";
import builder from "../../assets/web-design/desktop/image-builder.jpg";
import app from "../../assets/home/desktop/image-app-design.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import styled from "styled-components";
import DesignTypes from "./DesignTypes";

const Web = styled.div`
  width: 100%;
  .designFeatures {
    margin-top: 15rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 5rem;
  }

  .designs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 5rem;
    margin-top: 15rem;
  }
`;

const WebDesign = () => {
  return (
    <Web>
      <HeroDesigns
        title="Web Design"
        paragraph=" We build websites that serve as powerful marketing tools and
        bring memorable brand experiences."
      />
      <div className="designFeatures">
        <DesignFeatures
          img={express}
          title="express"
          paragraphText="A multi-carrier shipping website for ecommerce businesses"
        />
        <DesignFeatures
          img={transfer}
          title="Transfer"
          paragraphText="Site for low-cost money transfers and sending money within seconds"
        />
        <DesignFeatures
          img={photon}
          title="photon"
          paragraphText="A state-of-the-art music player with high-resolution audio and DSP effects"
        />
        <DesignFeatures
          img={builder}
          title="builder"
          paragraphText="Connects users with local contractors based on their location"
        />
        <DesignFeatures
          img={blogr}
          title="blogr"
          paragraphText="Blogr is a platform for creating an online blog or publication"
        />
        <DesignFeatures
          img={camp}
          title="camp"
          paragraphText="Get expert training in coding, data, design, and digital marketing"
        />
      </div>
      <div className="designs">
        <DesignTypes
          img={app}
          title="app design"
          paragraphText="view project"
        />
        <DesignTypes
          img={graphic}
          title="graphic design"
          paragraphText="view project"
        />
      </div>
    </Web>
  );
};

export default WebDesign;

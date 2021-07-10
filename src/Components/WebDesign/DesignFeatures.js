import React from "react";
import { Feature } from "./DesignFeaturesStyles";

const DesignFeatures = (props) => {
  return (
    <Feature>
      <div className="featureImg">
        <img
          className="featureImg__img"
          src={props.img}
          alt={`${props.title} Img`}
        />
      </div>
      <div className="featureText">
        <h3>{props.title}</h3>
        <p>{props.paragraphText}</p>
      </div>
    </Feature>
  );
};

export default DesignFeatures;

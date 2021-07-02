import React from "react";
import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
const Feature = styled.div`
  height: 478px;
  width: 100%;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 70% 30%;
  overflow: hidden;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

  .featureImg {
    &__img {
      width: 100%;
      height: 100%;
    }
  }

  .featureText {
    background-color: #fdf3f0;
    text-align: center;
    padding: 2rem 3rem;

    h3 {
      font-weight: 500;
      text-transform: uppercase;
      color: ${variables.primaryColors.peach};
      letter-spacing: 0.5rem;
      margin-bottom: 1.5rem;
    }
    p {
      color: ${variables.primaryColors.black};
    }
  }
`;

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

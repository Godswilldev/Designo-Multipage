import React from "react";
import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import circles from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";
import { device } from "../../Helpers/MediaQueries";
const HeroDesign = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${variables.primaryColors.white};
  background-color: ${variables.primaryColors.peach};
  height: 25.2rem;
  border-radius: 1rem;
  margin-top: 5rem;
  width: 100%;
  @media ${device.mobileL} {
    height: 100%;
    padding: 5rem 0;
  }
  h1 {
    font-weight: 500;
    margin-bottom: 3rem;
  }
  p {
    width: 50%;
    @media ${device.mobileL} {
      width: 75%;
    }
  }
  .circle {
    position: absolute;
    right: 0;
    overflow: hidden;
  }
`;

const HeroDesigns = ({ title, paragraph }) => {
  return (
    <HeroDesign>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <div className="circle">
        <img src={circles} alt="bg-pattern-intro-web" />
      </div>
    </HeroDesign>
  );
};

export default HeroDesigns;

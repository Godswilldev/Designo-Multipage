import React from "react";
import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import styled from "styled-components";
import { device } from "../../Helpers/MediaQueries";

const Feature = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15rem;
  margin-bottom: 5rem;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: column;
  }
  & > * {
    padding: 0 2rem;
    p {
      margin: 2rem 0;
    }

    @media ${device.tablet} {
      padding: 0 10rem;
      p {
        margin: 0;
        margin-bottom: 5rem;
      }
    }
  }
  .feature__titie {
    letter-spacing: 0.7rem;
    font-weight: 500;
  }
`;

const Features = () => {
  return (
    <Feature>
      <div>
        <img src={passionate} alt="illustration passionate" />
        <p className="feature__titie">PASSIONATE</p>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>
      <div>
        <img src={resourceful} alt="illustration resourceful" />
        <p className="feature__titie">RESOURCEFUL</p>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      <div>
        <img src={friendly} alt="illustration friendly" />
        <p className="feature__titie">FRIENDLY</p>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>
    </Feature>
  );
};

export default Features;

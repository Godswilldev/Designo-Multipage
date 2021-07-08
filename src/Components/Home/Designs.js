import React from "react";
import styled from "styled-components";
import web from "../../assets/home/desktop/image-web-design-large.jpg";
import app from "../../assets/home/desktop/image-app-design.jpg";
import graphics from "../../assets/home/desktop/image-graphic-design.jpg";
import * as variables from "../../Helpers/Variables";
import { Link } from "react-router-dom";
import { device } from "../../Helpers/MediaQueries";
const Design = styled.div`
  margin-top: 15rem;
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(2, 47.5%);
  grid-template-rows: repeat(2, 47.5%);
  grid-gap: 5%;
  height: 64rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
  & > * {
    border-radius: 1rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    h1 {
      margin-bottom: 2rem;
      font-weight: 500;
      @media ${device.mobileL} {
        font-size: 3rem;
      }
    }
    @media ${device.mobileL} {
      p {
        font-size: 2rem;
      }
    }
  }
  .web {
    grid-row: 1/-1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${web});
    @media ${device.tablet} {
      grid-row: unset;
    }
  }
  .app {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${app});
  }
  .graphics {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${graphics});
  }

  a {
    text-decoration: none;
    color: ${variables.primaryColors.white};
  }
`;

const Designs = () => {
  return (
    <Design>
      <Link to="/web" className="web">
        <h1>Web design</h1>
        <p>View projects</p>
      </Link>
      <Link to="/app" className="app">
        <h1>App design</h1>
        <p>View projects</p>
      </Link>
      <Link to="/graphics" className="graphics">
        <h1>Graphics design</h1>
        <p>View projects</p>
      </Link>
    </Design>
  );
};

export default Designs;

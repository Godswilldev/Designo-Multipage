import styled from "styled-components";

import * as variables from "../../Helpers/Variables";

import { device } from "../../Helpers/MediaQueries";

export const About = styled.div`
  margin-top: 5rem;
  color: ${variables.primaryColors.white};
  .locations {
    margin-top: 15rem;
  }
  .styledtext {
    padding: 0 8rem;
    position: relative;
    background-color: ${variables.primaryColors.peach};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    text-align: justify;
    @media ${device.tablet} {
      padding: 0 4rem;
    }

    h1 {
      margin-bottom: 3rem;
    }

    img {
      position: absolute;
      height: 100%;
    }
  }

  .styledImg {
    img {
      width: 100%;
      height: 100%;
    }
    @media ${device.tablet} {
      order: -1;
    }
  }
  .about {
  }

  .about__header {
    display: grid;
    grid-template-columns: 60% 1fr;
    height: 48rem;
    border-radius: 1rem;
    overflow: hidden;

    @media ${device.tablet} {
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 50rem 40rem;
    }
    @media ${device.mobileL} {
      grid-template-rows: 40rem 50rem;
    }
    @media ${device.mobileM} {
      grid-template-rows: 40rem 55rem;
    }
    @media ${device.mobileS} {
      grid-template-rows: 40rem 65rem;
    }
  }

  .about__talent {
    display: grid;
    grid-template-columns: 40% 1fr;
    height: 64rem;
    border-radius: 1rem;
    overflow: hidden;
    margin-top: 15rem;

    @media ${device.tablet} {
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 50rem 40rem;
    }
    @media ${device.mobileL} {
      grid-template-rows: 40rem 60rem;
    }
    @media ${device.mobileM} {
      grid-template-rows: 40rem 65rem;
    }
    @media ${device.mobileS} {
      grid-template-rows: 40rem 90rem;
    }

    .styledtext {
      background-color: #fdf3f0;
      h1 {
        color: ${variables.primaryColors.peach};
      }
      p {
        color: ${variables.primaryColors.black};
      }
    }
  }
  .about__company {
    display: grid;
    grid-template-columns: 60% 1fr;
    height: 64rem;
    border-radius: 1rem;
    overflow: hidden;
    margin: 15rem 0;
    .styledtext {
      background-color: #fdf3f0;
      h1 {
        color: ${variables.primaryColors.peach};
      }
      p {
        color: ${variables.primaryColors.black};
      }
    }

    @media ${device.tablet} {
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 50rem 40rem;
    }
    @media ${device.mobileL} {
      grid-template-rows: 40rem 60rem;
    }
    @media ${device.mobileM} {
      grid-template-rows: 40rem 65rem;
    }
    @media ${device.mobileS} {
      grid-template-rows: 40rem 90rem;
    }
  }
`;

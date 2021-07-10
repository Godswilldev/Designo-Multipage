import styled from "styled-components";

import * as variables from "../../Helpers/Variables";

import { device } from "../../Helpers/MediaQueries";

export const Hero = styled.div`
  margin-top: 5rem;
  height: 64rem;
  width: 100%;
  background-color: ${variables.primaryColors.peach};
  border-radius: 1rem;
  color: ${variables.primaryColors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media ${device.tablet} {
    flex-direction: column;
    height: 100%;
    text-align: center;
  }

  .heroText {
    padding-left: 5rem;
    h1 {
      line-height: 1.2;
      font-weight: 500;
    }
    & > * {
      margin: 3rem 0;
    }
    @media ${device.laptop} {
      padding-left: 2rem;
      br {
        display: none;
      }
    }
    @media ${device.tablet} {
      margin-top: 10rem;
      padding: 0 2rem;
      br {
        display: block;
      }
    }
    @media ${device.mobileL} {
      br {
        display: none;
      }
    }
  }

  .heroImg {
    margin-top: 20rem;
    margin-right: -7rem;
    @media ${device.laptop} {
      margin-right: -15rem;
    }
    @media ${device.tablet} {
      margin: 0;
      padding: 0;
    }
  }

  .circles {
    position: absolute;
    right: 0;
  }
`;

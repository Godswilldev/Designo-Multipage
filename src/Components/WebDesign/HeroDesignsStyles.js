import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";

export const HeroDesign = styled.div`
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

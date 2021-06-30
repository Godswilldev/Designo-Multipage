import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";

export const Talk = styled.div`
  position: relative;
  bottom: -7rem;
  height: 292px;
  background-color: ${variables.primaryColors.peach};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 0 5rem;
  color: ${variables.primaryColors.white};
  .talk {
    h1 {
      line-height: 1.2;
      font-weight: 500;
    }
    & > * {
      margin: 2rem 0;

      @media ${device.tablet} {
        margin: 4rem 0;
      }
    }
  }

  @media ${device.laptop} {
    bottom: -10rem;
  }

  @media ${device.tablet} {
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding: 4rem;
    .btn {
      margin: 4rem;
    }
  }
`;

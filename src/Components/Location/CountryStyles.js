import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";

export const StyledCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${variables.primaryColors.black};

  @media ${device.tablet} {
    flex-direction: column;
  }

  .country {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      text-transform: uppercase;
      font-size: 1.8rem;
      letter-spacing: 1rem;
      margin-bottom: 4rem;

      @media ${device.tablet} {
        margin-bottom: 2rem;
      }
    }

    @media ${device.tablet} {
      margin-bottom: 10rem;
    }
  }
`;

export const Illustration = styled.div`
  height: 20.2rem;
  width: 20.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  &.canada {
    background: linear-gradient(
      360deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
  }

  &.australia {
    background: linear-gradient(
      -90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
  }

  &.uk {
    background: linear-gradient(
      180deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
  }

  img {
    width: 100%;
    height: 100%;
    margin-top: -3rem;
  }
`;

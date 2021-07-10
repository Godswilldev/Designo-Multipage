import styled from "styled-components";
import { device } from "../../Helpers/MediaQueries";

export const Feature = styled.div`
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

import styled from "styled-components";
import { device } from "../../Helpers/MediaQueries";

export const Design = styled.div`
  height: 308px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  text-align: center;

  h1 {
    font-weight: 500;
    margin-bottom: 2rem;
    @media ${device.tablet} {
      font-size: 3rem;
    }
  }
  @media ${device.tablet} {
    p {
      font-size: 1.5rem;
    }
  }
`;

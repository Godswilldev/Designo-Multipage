import styled from "styled-components";

import * as variables from "../../Helpers/Variables";

import { device } from "../../Helpers/MediaQueries";

export const StyledContact = styled.div`
  .contact {
    margin-top: 5rem;
    margin-bottom: 15rem;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(2, 50%);
    height: 48rem;
    background-color: ${variables.primaryColors.peach};
    border-radius: 1rem;
    color: ${variables.primaryColors.white};
    padding: 0 7rem;
    &__message {
      h1 {
        margin-bottom: 3rem;
        font-weight: 500;
      }

      @media ${device.mobileL} {
        margin-bottom: 5rem;
      }
    }

    @media ${device.tablet} {
      height: 100%;
      text-align: center;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      /* margin: 0 auto;
      text-align: center; */
      br {
        display: none;
      }
    }

    @media ${device.mobileL} {
      padding: 5rem;
    }
  }

  .country {
    margin-bottom: 5rem;
  }
`;

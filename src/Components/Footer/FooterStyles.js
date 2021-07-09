import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";

export const Footers = styled.footer`
  .footer {
    height: 39.3rem;
    padding: 7rem;
    background-color: ${variables.primaryColors.black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.tablet} {
      height: 100%;
    }

    .footer__nav {
      display: flex;
      justify-content: space-between;
      margin-top: 15rem;

      .footerLogo {
        width: 25rem;
      }

      @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
      }

      .links {
        text-decoration: none;
        color: ${variables.primaryColors.white};
        font-size: 1rem;
        text-transform: uppercase;
        &:not(:last-child) {
          margin-right: 4rem;
          @media ${device.tablet} {
            margin-right: 0;
          }
        }

        @media ${device.tablet} {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
      }
    }

    .footer__details {
      color: ${variables.primaryColors.white};
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 5rem;

      &--links :not(:last-child) {
        margin-right: 2rem;
        cursor: pointer;
      }

      @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        & > * {
          margin-bottom: 5rem;
        }
      }
    }
  }
`;

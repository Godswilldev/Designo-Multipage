import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";
import styled from "styled-components";
import canadaMap from "../../assets/locations/desktop/image-map-canada.png";
import canadaMapTablet from "../../assets/locations/tablet/image-map-canada.png";
import australiaMap from "../../assets/locations/desktop/image-map-australia.png";
import australiaMapTablet from "../../assets/locations/tablet/image-map-australia.png";
import ukMap from "../../assets/locations/desktop/image-map-united-kingdom.png";
import ukMapTablet from "../../assets/locations/tablet/image-map-uk.png";

export const StyledLocations = styled.div`
  .location {
    margin: 5rem 0;
    display: grid;
    height: 104rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    overflow: hidden;
    @media ${device.tablet} {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      height: 100%;
    }

    &__details {
      display: flex;
      justify-content: space-between;

      @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        text-align: center;

        & > * {
          margin-bottom: 3rem;
        }
      }
    }

    .country {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10rem;
      color: ${variables.primaryColors.black};
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        @media ${device.tablet} {
          left: unset;
          bottom: unset;
        }
      }
      h1 {
        color: ${variables.primaryColors.peach};
        margin-bottom: 3rem;
        @media ${device.tablet} {
          text-align: center;
        }
      }
    }

    &__canada {
      grid-column: 1/3;
      &--map {
        background-image: url(${canadaMap});
        @media ${device.tablet} {
          background-image: url(${canadaMapTablet});
          grid-column: 1/-1;
          order: -6;
        }
      }
      @media ${device.tablet} {
        grid-column: unset;
        order: -5;
      }
    }

    &__australia {
      grid-column: 2/-1;

      &--map {
        background-image: url(${australiaMap});
        @media ${device.tablet} {
          background-image: url(${australiaMapTablet});
          grid-column: 1/-1;
          order: -4;
        }
      }

      @media ${device.tablet} {
        grid-column: 1/-1;
        order: -3;
      }
    }
    &__uk {
      grid-column: 1/3;
      &--map {
        background-image: url(${ukMap});
        @media ${device.tablet} {
          background-image: url(${ukMapTablet});
          grid-column: 1/-1;
          order: -2;
        }
      }
      @media ${device.tablet} {
        grid-column: 1/-1;
      }
    }

    .locations {
      border-radius: 1rem;
      background-color: #fdf3f0;
      @media ${device.tablet} {
        padding: 5rem;
      }

      .map {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
      }
    }
  }
`;

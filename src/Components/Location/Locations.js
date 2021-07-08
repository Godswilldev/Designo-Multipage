import React from "react";
import styled from "styled-components";
import canadaMap from "../../assets/locations/desktop/image-map-canada.png";
import australiaMap from "../../assets/locations/desktop/image-map-australia.png";
import ukMap from "../../assets/locations/desktop/image-map-united-kingdom.png";
import circles from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import * as variables from "../../Helpers/Variables";

const StyledLocations = styled.div`
  .location {
    margin: 5rem 0;
    display: grid;
    height: 104rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    overflow: hidden;

    &__details {
      display: flex;
      justify-content: space-between;
    }

    .locations {
      border-radius: 1rem;
      background-color: #fdf3f0;

      .map {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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
      }
      h1 {
        color: ${variables.primaryColors.peach};
        margin-bottom: 3rem;
      }
    }

    &__canada {
      grid-column: 1/3;
      &--map {
        background-image: url(${canadaMap});
      }
    }

    &__australia {
      grid-column: 2/-1;

      &--map {
        background-image: url(${australiaMap});
      }
    }
    &__uk {
      grid-column: 1/3;
      &--map {
        background-image: url(${ukMap});
      }
    }
  }
`;

const Locations = () => {
  return (
    <div>
      <StyledLocations>
        <div className="location">
          <div className="locations country location__canada">
            <img src={circles} alt="two circles pattern" />
            <h1>Canada</h1>
            <div className="location__details">
              <div>
                <strong>
                  <p>Designo Central Office</p>
                </strong>
                <p>
                  3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
                </p>
              </div>
              <div>
                <strong>
                  <p>Contact</p>
                </strong>
                <p>
                  P : +1 253-863-8967 <br /> M : contact@designo.co
                </p>
              </div>
            </div>
          </div>

          <div className="locations map location__canada--map"></div>
          <div className="locations map location__australia--map"></div>
          <div className="locations country location__australia">
            <img src={circles} alt="two circles pattern" />
            <h1>Australia</h1>
            <div className="location__details">
              <div>
                <strong>
                  <p>Designo AU Office</p>
                </strong>
                <p>
                  19 Balonne Street
                  <br />
                  New South Wales 2443
                </p>
              </div>
              <div>
                <strong>
                  <p>Contact</p>
                </strong>
                <p>
                  P : (02) 6720 9092
                  <br /> M : contact@designo.au
                </p>
              </div>
            </div>
          </div>
          <div className="locations country location__uk">
            <img src={circles} alt="two circles pattern" />
            <h1>United Kingdom</h1>
            <div className="location__details">
              <div>
                <strong>
                  <p>Designo UK Office</p>
                </strong>
                <p>
                  13 Colorado Way <br />
                  Rhyd-y-fro SA8 9GA
                </p>
              </div>
              <div>
                <strong>
                  <p>Contact</p>
                </strong>
                <p>
                  P : 078 3115 1400
                  <br /> M : contact@designo.uk
                </p>
              </div>
            </div>
          </div>
          <div className="locations map location__uk--map"></div>
        </div>
      </StyledLocations>
    </div>
  );
};

export default Locations;

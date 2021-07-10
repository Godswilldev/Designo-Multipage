import React from "react";
import circles from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import { StyledLocations } from "./LocationsStyles";

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

import React from "react";
import { Link } from "react-router-dom";
import canada from "../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import united_kingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import Button from "../../Components/Button/Button";
import { StyledCountry, Illustration } from "./CountryStyles";

const Country = () => {
  return (
    <StyledCountry>
      <div className="country">
        <Illustration className="illustration__container  canada">
          <img src={canada} alt="canada illustration" />
        </Illustration>

        <div>
          <h1>canada</h1>
          <Link to="/location">
            <Button text="see location" col="onLight" />
          </Link>
        </div>
      </div>

      <div className="country">
        <Illustration className="illustration__container  australia">
          <img src={australia} alt="australia illustration" />
        </Illustration>

        <div>
          <h1>australia</h1>
          <Link to="/location">
            <Button text="see location" col="onLight" />
          </Link>
        </div>
      </div>

      <div className="country">
        <Illustration className="illustration__container uk">
          <img src={united_kingdom} alt="united_kingdom illustration" />
        </Illustration>

        <div>
          <h1>united kingdom</h1>
          <Link to="/location">
            <Button text="see location" col="onLight" />
          </Link>
        </div>
      </div>
    </StyledCountry>
  );
};

export default Country;

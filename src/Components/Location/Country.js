import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import canada from "../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import united_kingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import Button from "../../Components/Button/Button";
import * as variables from "../../Helpers/Variables";

const StyledCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${variables.primaryColors.black};

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
    }
    a {
      text-decoration: none;
    }
  }
`;

const Illustration = styled.div`
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

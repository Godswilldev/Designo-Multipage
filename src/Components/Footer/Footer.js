import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../../assets/shared/desktop/logo-light.png";
import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";

const Footers = styled.footer`
  .footer {
    height: 39.3rem;
    padding: 7rem;
    background-color: ${variables.primaryColors.black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footer__nav {
      display: flex;
      justify-content: space-between;
      margin-top: 10rem;

      .footerLogo {
        width: 15rem;
      }

      .links {
        text-decoration: none;
        color: ${variables.primaryColors.white};
        font-size: 1rem;
        text-transform: uppercase;
        &:not(:last-child) {
          margin-right: 4rem;
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
        margin-right: 1rem;
      }
    }
  }

  hr {
    width: 100%;
    color: #000;
    height: 10rem;
  }
`;

const Footer = () => {
  return (
    <Footers>
      <div className="footer">
        <div className="footer__nav">
          <img className="footerLogo" src={navlogo} alt="nav-logo" />
          <ul>
            <Link className="links" to="/company">
              our company
            </Link>
            <Link className="links" to="/location">
              locations
            </Link>
            <Link className="links" to="/contact">
              contact
            </Link>
          </ul>
        </div>
        <div className="footer__details">
          <p className="footer__details--address">
            Designo Central Office <br /> 3886 Wellington Street <br /> Toronto,
            Ontario M9C 3J5
          </p>
          <p className="footer__details--contact">
            Contact Us (Central Office) <br /> P : +1 253-863-8967 <br /> M :
            contact@designo.com
          </p>
          <div className="footer__details--links">
            <img src={twitter} alt="twitter link" />
            <img src={facebook} alt="facebook link" />
            <img src={instagram} alt="instagram link" />
            <img src={pinterest} alt="pinterest link" />
            <img src={youtube} alt="youtube link" />
            {/* <Link className="link" to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link> */}
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </Footers>
  );
};

export default Footer;

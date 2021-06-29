import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../assets/shared/desktop/logo-dark.png";
import styled from "styled-components";
import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Nav = styled.nav`
  display: flexbox;
  justify-content: space-between;
  align-items: center;
  height: 7.2vh;
  margin-top: 4rem;
  text-transform: uppercase;
  position: relative;
  width: 100%;
  .navLogo {
    width: 15rem;
    @media ${device.tablet} {
      display: flex;
      margin-left: 2rem;
    }
  }
  ul {
    display: flex;
    list-style: none;
    color: ${variables.primaryColors.black};

    @media ${device.tablet} {
      /* display: none; */
      display: flex;
      position: absolute;
      flex-direction: column;
      background-color: ${variables.primaryColors.black};
      transition: 0.5s all;
      top: 9rem;
      height: 40vh;
      width: 100%;
      left: ${({ toggle }) => (toggle ? "-200vw" : "0")};
      visibility: ${({ toggle }) => (toggle ? "hidden" : "visible")};
      padding-left: 5rem;
    }

    .links {
      text-decoration: none;
      color: ${variables.primaryColors.black};

      &:not(:last-child) {
        margin-right: 4rem;
      }

      @media ${device.tablet} {
        display: flex;
        color: #fff;
        font-size: 4rem;
        margin-top: 5rem;
      }
    }
  }
  .hamburger {
    display: none;
    cursor: pointer;
    z-index: 99;
    @media ${device.tablet} {
      display: flex;
      margin-right: 2rem;
    }
  }

  .menuIcon {
    font-size: 2.5rem;
    color: "#1D1CIE";
    @media ${device.tablet} {
      font-size: 3.5rem;
    }
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Nav toggle={toggle}>
      <div>
        <img className="navLogo" src={navlogo} alt="nav-logo" />
      </div>
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
      <div className="hamburger" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <MenuIcon className="menuIcon" />
        ) : (
          <CloseIcon className="menuIcon" />
        )}
      </div>
    </Nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../assets/shared/desktop/logo-dark.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Nav } from "./NavbarStyles";
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

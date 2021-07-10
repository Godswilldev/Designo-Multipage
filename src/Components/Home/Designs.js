import React from "react";
import { Link } from "react-router-dom";
import { Design } from "./DesignsStyles";
const Designs = () => {
  return (
    <Design id="designs">
      <Link to="/web" className="web">
        <h1>Web design</h1>
        <p>View projects</p>
      </Link>
      <Link to="/app" className="app">
        <h1>App design</h1>
        <p>View projects</p>
      </Link>
      <Link to="/graphics" className="graphics">
        <h1>Graphics design</h1>
        <p>View projects</p>
      </Link>
    </Design>
  );
};

export default Designs;

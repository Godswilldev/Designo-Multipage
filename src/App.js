import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LetsTalk from "./Components/LetsTalk/LetsTalk";
import Navbar from "./Components/Navbar/Navbar";
import Globalstyles from "./Helpers/Globalstyes";
import { device } from "./Helpers/MediaQueries";
import WebDesign from "./Components/WebDesign/WebDesign";
import AppDesign from "./Components/AppDesign/AppDesign";
import GraphicsDesign from "./Components/GraphicsDesign/GraphicsDesign";
import AboutUs from "./Components/About/AboutUs";
import Locations from "./Components/Location/Locations";
import ContactUs from "./Components/Contact/ContactUs";
const Apps = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;

  @media ${device.tablet} {
    width: 95%;
  }
`;

const App = () => {
  return (
    <>
      <Globalstyles />
      <Apps>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/web" component={WebDesign} />
          <Route exact path="/app" component={AppDesign} />
          <Route exact path="/graphics" component={GraphicsDesign} />
          <Route exact path="/company" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/location" component={Locations} />
        </Switch>
      </Apps>
      <LetsTalk />
      <Footer />
    </>
  );
};

export default App;

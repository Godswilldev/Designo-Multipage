import React from "react";
import styled from "styled-components";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import { pageVariants } from "./Helpers/FramerMotion";

const Apps = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;

  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 95%;
  }
  @media ${device.mobileL} {
    width: 98%;
  }
`;

const App = () => {
  const location = useLocation();

  return (
    <>
      <Globalstyles />
      <Apps>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <Home />
                </motion.div>
              )}
            />
            <Route
              exact
              path="/web"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <WebDesign />
                </motion.div>
              )}
            />
            <Route
              exact
              path="/app"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <AppDesign />
                </motion.div>
              )}
            />
            <Route
              exact
              path="/graphics"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <GraphicsDesign />
                </motion.div>
              )}
            />
            <Route
              exact
              path="/company"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <AboutUs />
                </motion.div>
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <ContactUs />
                </motion.div>
              )}
            />
            <Route
              exact
              path="/location"
              render={() => (
                <motion.div
                  initial="initial"
                  exit="out"
                  animate="in"
                  variants={pageVariants}
                >
                  <Locations />
                </motion.div>
              )}
            />
            <Redirect to="/" />
          </Switch>
        </AnimatePresence>
      </Apps>
      <LetsTalk />
      <Footer />
    </>
  );
};

export default App;

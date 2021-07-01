import React from "react";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LetsTalk from "./Components/LetsTalk/LetsTalk";
import Navbar from "./Components/Navbar/Navbar";
import Globalstyles from "./Helpers/Globalstyes";
import { device } from "./Helpers/MediaQueries";

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
        <Home />
        <LetsTalk />
      </Apps>
      <Footer />
    </>
  );
};

export default App;

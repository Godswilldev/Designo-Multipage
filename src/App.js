import React from "react";
import styled from "styled-components";
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
      </Apps>
    </>
  );
};

export default App;

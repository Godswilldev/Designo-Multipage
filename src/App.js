import React from "react";
import Button from "./Components/Button/Button";
import Globalstyles from "./Helpers/Globalstyes";
const App = () => {
  return (
    <div style={{ fontFamily: "Jost" }}>
      <Globalstyles />
      Designo
      <Button variant="onDark" text="get in touch" />
    </div>
  );
};

export default App;

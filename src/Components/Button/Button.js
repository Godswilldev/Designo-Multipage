import React from "react";
import { Btn } from "./ButtonStyles";
import Button from "@material-ui/core/Button";
const Buttons = ({ col, text }) => {
  return (
    <Btn col={col} style={{ display: "inline" }}>
      <Button className="btn">{text}</Button>
    </Btn>
  );
};

export default Buttons;

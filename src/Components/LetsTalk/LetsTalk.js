import React from "react";
import Buttons from "../Button/Button";
import { Talk } from "./LetsTalkStyles";
const LetsTalk = () => {
  return (
    <Talk>
      <div className="talk">
        <h1>
          Let’s talk about <br /> your project
        </h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how{" "}
          <br />
          our expertise can help your business grow.
        </p>
      </div>
      <Buttons className="btn" text="get in touch" col="onDark" />
    </Talk>
  );
};

export default LetsTalk;

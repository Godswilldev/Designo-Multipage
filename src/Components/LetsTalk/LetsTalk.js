import React from "react";
import Buttons from "../Button/Button";
import { Talk } from "./LetsTalkStyles";
import circles from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";

const LetsTalk = () => {
  return (
    <Talk>
      <div className="circles">
        <img src={circles} alt="" />
      </div>

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

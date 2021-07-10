import React from "react";
import { Design } from "./DesignTypesStyles";
const DesignTypes = (props) => {
  return (
    <div>
      <Design img={props.img}>
        <h1>{props.title}</h1>
        <p>{props.paragraphText}</p>
      </Design>
    </div>
  );
};

export default DesignTypes;

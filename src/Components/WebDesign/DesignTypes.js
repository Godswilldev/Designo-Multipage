import React from "react";
import styled from "styled-components";

const Design = styled.div`
  height: 308px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

  h1 {
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

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

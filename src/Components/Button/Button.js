import React from "react";
import styled from "styled-components";
import * as variables from "../../Helpers/Variables";

const Buttons = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  text-transform: uppercase;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  background-color: ${({ variant }) =>
    variant === "onDark"
      ? variables.primaryColors.white
      : variables.primaryColors.peach};
  color: ${({ variant }) =>
    variant === "onDark"
      ? variables.primaryColors.black
      : variables.primaryColors.white};

  &:hover {
    background-color: ${variables.secondaryColors.lightPeach};
    color: ${variables.primaryColors.white};
  }
  &::focus,
  &::focus {
    box-shadow: 0rem 0rem 0.2rem rgba(0, 0, 0, 0.3);
  }
`;

const Button = ({ variant, text }) => {
  return <Buttons variant={variant}>{text}</Buttons>;
};

export default Button;

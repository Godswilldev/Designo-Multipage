import styled from "styled-components";
import * as variables from "../../Helpers/Variables";

export const Btn = styled.div`
  .btn {
    border: none;
    outline: none;
    cursor: pointer;
    width: 16rem;
    height: 6rem;
    text-transform: uppercase;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.3s;
    font-size: 1.6rem;
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
    background-color: ${({ col }) =>
      col === "onDark"
        ? variables.primaryColors.white
        : variables.primaryColors.peach};
    color: ${({ col }) =>
      col === "onDark"
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
  }
`;

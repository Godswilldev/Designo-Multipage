import styled from "styled-components";

import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 2px solid ${variables.secondaryColors.lightGrey};
    background-color: transparent;
    padding: 1rem;
    margin-left: auto;
    width: 35rem;
    margin-bottom: 1rem;
    &::placeholder {
      color: ${variables.secondaryColors.lightGrey};
    }

    @media ${device.tablet} {
      margin: 0 auto;
      margin-bottom: 1rem;
      width: 100%;
    }
  }
  textarea {
    margin-top: 2rem;
  }

  .error__message {
    font-size: 1rem;
    display: block;
    margin-left: auto;
  }
  .error__icon {
    width: 1rem;
  }
  .submit {
    margin-top: 1.5rem;

    @media ${device.tablet} {
      margin-bottom: 5rem;
    }
  }
`;

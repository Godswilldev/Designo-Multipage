import styled from "styled-components";

import * as variables from "../../Helpers/Variables";

export const About = styled.div`
  margin-top: 5rem;
  color: ${variables.primaryColors.white};

  .about__header {
    display: grid;
    grid-template-columns: 60% 1fr;
    height: 48rem;
    border-radius: 1rem;
    overflow: hidden;

    &--text {
      padding: 0 8rem;
      position: relative;
      background-color: ${variables.primaryColors.peach};
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;

      h1 {
        margin-bottom: 3rem;
      }

      img {
        position: absolute;
        height: 100%;
      }
    }
    &--img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

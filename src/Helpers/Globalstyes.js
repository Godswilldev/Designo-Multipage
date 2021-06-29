import { createGlobalStyle } from "styled-components";
import { device } from "./MediaQueries";
import * as variables from "../Helpers/Variables";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing: border-box;
        @media ${device.laptopL}{
            font-size: 62.5%;
        }
        @media ${device.laptop}{
            font-size: 56.6%;
        }
        @media ${device.tablet}{
            font-size: 50.5%;
        }
        @media ${device.mobileL}{
            font-size: 44.5%;
        }
        @media ${device.mobileM}{
            font-size: 38.5%;
        }
        @media ${device.mobileS}{
            font-size:32.5%;
        }
    }

    body{
        font-family: 'Jost', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        background-color: ${variables.secondaryColors.lightGrey};
        width: 100%;
    }
`;
export default GlobalStyles;

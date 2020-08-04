import { Fonts } from "./fonts/utils/constant";

const fontLight = require("./fonts/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjRbMZhLw.woff2");
const fontsNormal = require("./fonts/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2");
const fontsBold = require("./fonts/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ObXbMZhLw.woff2");

export const GlobalStyle = `
        @font-face {
          font-family: "Josefin Sans light";
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(${fontLight}) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Josefin Sans normal";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(${fontsNormal}) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Josefin Sans bold";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(${fontsBold}) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        .fontLight {
          font-family: ${Fonts.lightJosefin};
        }
        .fontNormal,
        body {
          font-family: ${Fonts.normalJosefin};
          font-size: 15px;
        }
        .fontBold {
          font-family: ${Fonts.boldJosefin};
        }
        `;

// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';
import Asap from "../assets/fonts/Asap-Regular.ttf";

export const asap = {
  fontFamily: "Asap",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Asap'),
    local('Asap-Regular'),
    url(${Asap}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

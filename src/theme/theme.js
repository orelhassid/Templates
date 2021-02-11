import { createMuiTheme } from "@material-ui/core/styles";
import {
  PRIMARY,
  BORDER_RADIUS,
  BG_INPUT,
  FONTS,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "./config";
import { asap } from "./fonts";

const theme = createMuiTheme({
  typography: {
    fontFamily: FONTS.join(","),

    h1: {
      fontSize: "4rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      lineHeight: "23px",
      letterSpacing: "0.15px",
    },
    label: {
      color: TEXT_PRIMARY,
    },
    body2: {
      textTransform: "capitalize",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "16px",
      letterSpacing: "0.75px",
      textAlign: "left",
    },
  },
  shape: {
    borderRadius: BORDER_RADIUS,
  },

  palette: {
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },
    primary: {
      main: PRIMARY,
    },
    danger: {
      main: "red",
    },

    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    ".InputBase-input": {
      backgroundColor: BG_INPUT,
    },

    MuiCssBaseline: {
      "@global": {
        "html, body": {
          minHeight: "100%",
          height: "fit-content",
          // fontFamily: FON,
        },
        "@font-face": [asap],
        body: {},
        input: {
          border: "none",
          outline: "none",
        },
        "input:-webkit-autofill": {
          WebkitBoxShadow: "red",
        },
      },
    },
  },
});

export default theme;

// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,

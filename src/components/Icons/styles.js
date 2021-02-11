import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    margin: "0 16px 0 16px",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

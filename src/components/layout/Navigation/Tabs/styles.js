import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    // display: "flex",
  },
  verticalContainer: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    // height: 224,
  },
  verticalTabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottom: "none",
    justifyContent: "flex-start"
  },
  tabs: {
    borderBottom: "1px solid #e8e8e8",
    justifyContent: "center",
    display: "flex",
    flexGrow: 1,
    width: "100%",
  },
  tabsContainer: {
    display: "flex",
  },
  tabsIndicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tabsScroller: {
    flexGrow: "0",
  },

  panel: {
    width: "100%",
    // display: "flex",
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },

  // panel: {},
  tab: {
    textTransform: "capitalize",
    minWidth: 72,
    // minWidth: "20%",
    ...theme.typography.body2,
  },

  tabSelected: {
    color: theme.palette.primary.main,
  },
  tabWrapper: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
}));

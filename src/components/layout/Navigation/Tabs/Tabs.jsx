import React, { useEffect, useState } from "react";
import { Box, Tabs as MUITabs, Typography } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import useStyles from "./styles";
import { Link, useParams } from "react-router-dom";
import { getSLug } from "../../../../utils/string";

export default function Tabs({ tabs, orientation }) {
  // const { tab: tabClasses, tabs: tabsClasses } = useStyles();
  const classes = useStyles();
  const isVert = orientation === "vertical";

  const [hideView, setHideView] = useState(false);

  const [value, setValue] = React.useState(0);
  const { page, subpage } = useParams();

  useEffect(() => {
    // console.log("Page and subpage", { page, subpage });
    setHideView(!page);
  }, [page]);

  useEffect(() => {
    const tab = tabs.find((tab) => {
      const slug = getSLug(tab?.to);
      if (subpage) {
        // console.log("Subpage", { subpage, slug, tab, page });
        return slug === subpage ? tab : false;
      }
      return slug === page ? tab : false;
    });
    // console.log("tab", { tabs, tab });

    if (!tab) return setValue(0);

    const index = tabs.indexOf(tab);

    setValue(index);
  }, [page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        className={classes.panel}
      >
        {value === index && children}
      </Box>
    );
  };

  return (
    <Box
      // display={orientation === "vertical" ? "flex" : "block"}
      className={isVert ? classes.verticalContainer : classes.mainContainer}
    >
      <MUITabs
        value={value}
        orientation={orientation}
        onChange={handleChange}
        classes={{
          root: isVert
            ? `${classes.verticalTabs}`
            : classes.tabs,
          indicator: classes.tabsIndicator,
          scroller: classes.tabsScroller,
          flexContainer: classes.tabsContainer,
        }}
        // classes={tabsStyles}
        variant="scrollable"

        // scrollButtons={"on"}
      >
        {tabs.map(({ ...rest }, index) => (
          <Tab
            {...rest}
            {...a11yProps(index)}
            key={index}
            component={Link}
            classes={{
              root: classes.tab,
              selected: classes.tabSelected,
              wrapper: classes.tabWrapper,
            }}
            disableRipple
          />
        ))}
      </MUITabs>

      {tabs.map(
        (tab, index) =>
          !hideView && (
            <TabPanel value={value} key={index} index={index}>
              {tab?.view}
            </TabPanel>
          )
      )}
    </Box>
  );
}

const LinkTab = (props) => {
  return (
    <Tab
      component={Link}
      {...props}
      // onClick={(event) => {
      //   event.preventDefault();
      // }}
    />
  );
};

Tabs.defaultProps = {
  tabs: [],
  orientation: "horizontal",
};

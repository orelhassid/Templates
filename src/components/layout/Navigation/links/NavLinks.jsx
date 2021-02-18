import React, { useContext } from "react";
import ListItem from "../Drawer/ListItem";
import List from "../Drawer/List";
import { getCommonLinks } from "./index";
import useStyles from "../styles";
import { UserContext } from "../../../../contexts/UserContext";

export default function NavLinks({ toggleDrawer }) {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const links = getCommonLinks(user);

  return (
    <List classes={{ root: classes.list }}>
      {links.map((item) => (
        <ListItem key={item.label} item={item} toggleDrawer={toggleDrawer} />
      ))}
    </List>
  );
}

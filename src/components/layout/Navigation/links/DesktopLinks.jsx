import React from "react";

import ListItem from "../Drawer/ListItem";

import { getCommonLinks } from "./index";

export default function DesktopLinks({ toggleDrawer }) {
  const links = getCommonLinks();

  return (
    <>
      <List>
        {links.map((item) => (
          <ListItem key={item.label} item={item} toggleDrawer={toggleDrawer} />
        ))}
      </List>
    </>
  );
}

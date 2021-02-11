import React, { useContext } from "react";
import useStyles from "./styles";
import { Box } from "@material-ui/core";

import ProfileCard from "./ProfileCard";
import { UserContext } from "../../../contexts/UserContext";

export default function ProfileHeader() {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { name, headline, image } = user;
  return (
    <Box className={classes.background}>
      <Box pt={5} pb={1}>
        <ProfileCard name={name} headline={headline} image={image} />
      </Box>
    </Box>
  );
}

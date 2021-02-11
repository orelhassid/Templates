import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Button, ProfileAvatar } from "../../UI";
import SocialBar from "./SocialBar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "fit-content",
    textAlign: "center",
  },
  avatarContainer: {
    // height: "75px",
  },
  profileName: {
    fontWeight: 600,
    fontSize: "20px",
  },
  profileSubtitle: {
    color: theme.palette.text.secondary,
  },
}));

export default function ProfileCard({ name, headline, image }) {
  const classes = useStyles();
  return (
    <Box mx="auto" className={classes.container}>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.avatarContainer}
      >
        <ProfileAvatar size="large" image={image} />
      </Box>
      <Box>
        <Typography className={classes.profileName}>{name}</Typography>
        {headline && (
          <Typography className={classes.profileSubtitle}>
            {headline}
          </Typography>
        )}
      </Box>
      <Box display="flex" justifyContent="space-around" my={2}>
        <Button>Hire Me</Button>
        <Button variant="text" color="secondary">
          OPEN TO WORK
        </Button>
      </Box>
      <Box>
        <SocialBar />
      </Box>
    </Box>
  );
}

ProfileCard.defaultProps = {
  name: "",
  headline: "",
};

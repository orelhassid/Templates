import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Box } from "@material-ui/core";
import Icons from "../../Icons/Icons";

export default function SocialBar() {
  const { user } = useContext(UserContext);

  // console.log("SocialBar", user); //DEBUG

  return (
    <Box display="flex" justifyContent="space-around" mx="auto" py={2}>
      {user?.socials &&
        user.socials.map(({ name, href }) => (
          <Icons key={name} name={name} href={href} />
        ))}
    </Box>
  );
}

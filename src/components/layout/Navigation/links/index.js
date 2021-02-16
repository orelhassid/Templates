import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LoginIcon from "@material-ui/icons/VpnKey";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import ProfileIcon from "@material-ui/icons/Person";
import UsersIcon from "@material-ui/icons/Group";
import {
  RT_LOGIN,
  RT_PROFILE,
  RT_LOGOUT,
  RT_USERS,
  RT_LAB,
} from "../../../../config/routes";
export function getCommonLinks(user) {
  return [
    { label: "Home", to: "/", icon: <HomeIcon /> },
    { label: "Login", to: RT_LOGIN, icon: <LoginIcon />, skip: user?.isAuth },
    {
      label: "Logout",
      to: RT_LOGOUT,
      icon: <LogoutIcon />,
      skip: !user?.isAuth,
    },
    {
      label: "Profile",
      to: RT_PROFILE,
      icon: <ProfileIcon />,
      skip: !user?.isAuth,
    },
    {
      label: "Users",
      to: RT_USERS,
      icon: <UsersIcon />,
      // skip: !user?.isAuth,
    },
    {
      label: "Lab",
      to: RT_LAB,
      // skip: !user?.isAuth,
    },
  ];
}

export function getProtectedLinks() {
  return [];
}

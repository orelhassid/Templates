import React from "react";
import Badge from "@material-ui/core/Badge";
import { Avatar as MUIAvatar, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.8s infinite ease-in-out",
      border: "4px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.6)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => {
  return {
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    medium: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    // avatar: ({ size }) => {
    //   return {
    //     width: theme.spacing(size),
    //     height: theme.spacing(size),
    //   };
    // },
  };
});
export default function ProfileAvatar(props) {
  const { size, image } = props;
  const classes = useStyles(props);

  return (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      variant="dot"
      className={classes.badge}
    >
      <MUIAvatar alt="Orel Hassid" src={image} className={classes[size]} />
    </StyledBadge>
  );
}
ProfileAvatar.defaultProps = {
  image: "/images/avatar.jpg",
};

/**
 *     <Box className={classes.container}>
    </Box>

 * 
 * <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        }
      >
        <MUIAvatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Badge>
 */

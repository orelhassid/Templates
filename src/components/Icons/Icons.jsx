import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import useStyles from "./styles";
import { Link, Tooltip } from "@material-ui/core";

export default function Icons({ name, href }) {
  const classes = useStyles();
  const renderIcons = () => {
    switch (name) {
      case "facebook":
        return <FacebookIcon classes={classes} />;
      case "github":
        return <GitHubIcon classes={classes} />;
      case "instagram":
        return <InstagramIcon classes={classes} />;
      case "twitter":
        return <TwitterIcon classes={classes} />;
      case "linkedin":
        return <LinkedInIcon classes={classes} />;

      default:
        break;
    }
  };

  return href ? (
    <Tooltip title={name}>
      <Link href={href} target="_blank" style={{ margin: 0 }}>
        {" "}
        {renderIcons(name)}
      </Link>
    </Tooltip>
  ) : (
    renderIcons(name)
  );
}

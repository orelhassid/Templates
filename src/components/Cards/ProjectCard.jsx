import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Avatar from "@material-ui/core/Avatar";
import { ProfileAvatar, SimpleMenu } from "../UI";
import { UserContext } from "../../contexts/UserContext";
import { CardActionArea } from "@material-ui/core";
import { RT_PROJECTS } from "../../config/routes";
import { useHistory } from "react-router-dom";
import { slugGenerator } from "../../utils/string";
import { deleteProject } from "../../actions/projects";
import ChipsArray from "../UI/Chips/Chips";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 245,
    // maxWidth: 345,
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard({ project }) {
  const { title, description, tagsTitle, tags, image } = project;

  const classes = useStyles();
  const { dispatchProjects } = useContext(UserContext);
  const [expanded, setExpanded] = React.useState(false);
  const { user } = useContext(UserContext);
  const history = useHistory();

  const handleDeleteProject = async () => {
    try {
      await dispatchProjects(deleteProject(project));
    } catch (error) {
      console.error(error);
    }
  };

  const actions = [
    {
      label: "Delete Project",
      onClick: handleDeleteProject,
    },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const slug = slugGenerator(title);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <ProfileAvatar
            aria-label="recipe"
            className={classes.avatar}
            image={user.image}
          >
            R
          </ProfileAvatar>
        }
        action={<SimpleMenu actions={actions} />}
        title={title}
        subheader={""}
      />
      {/* <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton> */}

      <CardActionArea onClick={() => history.push(`${RT_PROJECTS}/${slug}`)}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ChipsArray tags={tags} />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}

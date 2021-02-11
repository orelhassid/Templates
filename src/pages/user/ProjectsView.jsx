import { Box, Container, Fade, Grid, Grow } from "@material-ui/core";
import React, { useContext } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import { ActionsBar, SEO } from "../../components/layout";
import { Button } from "../../components/UI";

import { APP } from "../../config/index";
import { RT_NEW_PROJECT } from "../../config/routes";
import { UserContext } from "../../contexts/UserContext";

const actions = [
  {
    label: "Add New Project",
    to: RT_NEW_PROJECT,
  },
];

export default function ProjectsView() {
  const { projects } = useContext(UserContext);
  return (
    <Box>
      <SEO title={APP.title} description={APP.description} />
      <ActionsBar actions={actions} />

      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grow in timeout={1000} key={project.id}>
            <Grid item xs={12} sm={6} lg={4}>
              <ProjectCard project={project} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
}
